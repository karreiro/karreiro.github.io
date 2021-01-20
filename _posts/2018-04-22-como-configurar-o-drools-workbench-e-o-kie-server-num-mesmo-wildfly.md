---
layout: post
title:  "[pt-br] Como configurar o Drools Workbench e o KIE Server num mesmo WildFly"
permalink: /:year/:month/:day/:title:output_ext
date:   2018-04-22 00:00:00 -0300
---

Talvez você não saiba, mas estou trabalhando na evolução do Drools Workbench [1] nos últimos dois anos. É bastante recompensador e se você também quiser contribuir para esse projeto pode começar por [aqui](https://github.com/kiegroup/droolsjbpm-build-bootstrap/blob/master/README.md).

Durante a reprodução de determinados cenários e evolução de features, percebo uma dúvida surgir frequentemente entre as pessoas do time e contribuidores da comunidade: _"Como subir o Workbench e o KIE Server_ [2] _num mesmo WildFly?"_.

Neste post, faremos isso juntos da maneira mais rápida possível com apenas 3 etapas :-)


### 1) Preparando o WildFly

O download do WildFly é a primeiro passo do processo. Acessamos [wildfly.org/downloads](http://wildfly.org/downloads) e selecionamos a versão `11.0.0.Final` (`Java EE7 Full & Web Distribution`).

Com o arquivo `wildfly-11.0.0.Final.zip` descompactado, acessamos o diretório `bin` e executamos as linhas a seguir para adicionar dois novos usuários:
```
$ ./add-user.sh -a -u kieserver -g 'kie-server' -p 'kieserver1!'
$ ./add-user.sh -a -u workbench -g 'admin,kie-server' -p 'workbench!'
```

Agora saímos do diretório `bin`, abrimos o arquivo `standalone/configuration/standalone-full.xml` e adicionamos esta linha:
```
<login-module code="org.kie.security.jaas.KieLoginModule" flag="optional" module="deployment.kie-wb.war"/>
```
aqui:
```
<security-domains>
  ...
  <security-domain name="other" cache-type="default">
    <authentication>
      ...
      <!-- Adicione a linha acima aqui -->
    </authentication>
    ...
```

Pronto, o WildFly está configurado! :-)


### 2) Obtendo o KIE Server e o Drools Workbench

Talvez você já tenha o WAR do KIE Server e do Drools Workbench. Entretanto, se você estiver em seus primeiros dias de contribuição, seria legal _buildar_ a versão mais atualizada destes projetos.

Para conseguir o artefato do KIE Server, faça o clone [deste repositório](https://github.com/kiegroup/droolsjbpm-integration), build e encontre o WAR aqui:
```
kie-server-parent/kie-server-wars/kie-server/target/kie-server-7.8.0-SNAPSHOT-ee7.war
```
Para conseguir o artefato do Drools Workbench, faça o clone [deste repositório](https://github.com/kiegroup/kie-wb-distributions), build e encontre WAR aqui:
```
kie-wb-parent/kie-wb-distribution-wars/kie-wb/target/kie-wb-7.8.0-SNAPSHOT-wildfly11.war
```

Pronto! Temos nossos dois artefatos. Vamos para a última etapa :-)

### 3) Rodando o Drools Workbench com o KIE Server

Finalmente voltamos para o WildFly e colocamos nossos dois WARs no diretório `standalone/deployments`.

Em seguida os renomeamos, respectivamente, de `kie-server-7.8.0-SNAPSHOT-ee7.war` e `kie-wb-7.8.0-SNAPSHOT-wildfly11.war` para `kie-server.war` e `kie-wb.war`.

Agora, no diretório `bin`, executamos o seguinte comando:
```
./standalone.sh \
  --server-config=standalone-full.xml \
  -Dorg.kie.server.id=wildfly-kieserver \
  -Dorg.kie.server.persistence.ds=java:jboss/datasources/ExampleDS \
  -Dorg.kie.server.persistence.dialect=org.hibernate.dialect.MySQLDialect \
  -Dorg.kie.server.location=http://localhost:8080/kie-server/services/rest/server \
  -Dorg.kie.server.controller=http://localhost:8080/kie-wb/rest/controller \
  -Dorg.kie.server.user=kieserver \
  -Dorg.kie.server.pwd=kieserver1! \
  -Dorg.drools.server.ext.disabled=true \
  -Dorg.jbpm.server.ext.disabled=true \
```

Pronto! Acesse [localhost:8080/kie-wb](http://localhost:8080/kie-wb) com usuário `workbench` e senha `workbench!`, e veja tudo funcionando:

![Demo](/assets/wildfly-02-22.gif "Demo")

Se você quiser saber mais sobre os parâmetros do comando acima, ou sobre algum outro detalhe desse processo. Pode conferir a documentação atualizada do Drools [aqui](https://docs.jboss.org/drools/release/latest/drools-docs/html_single).

Espero que esse tutorial tenha sido útil pra você e lembre-se, divirta-se ;-)

---

> [1] Drools Workbench is a full featured web application for the visual composition of custom business rules and processes.
> <br />Source: https://docs.jboss.org/drools/release/latest/drools-docs/html_single/#_welcome

> [2] The Kie Server is a modular, standalone server component that can be used to instantiate and execute rules and processes. It exposes this functionality via REST, JMS and Java interfaces to client application. It also provides seamless integration with the Kie Workbench.
> <br />Source: https://docs.jboss.org/drools/release/latest/drools-docs/html_single/#_ch.kie.server
