# Camunda-SpringBoot-Angular-Keycloak
> **Systèmes complexes**
> 
> **Hedi Machat et Wiem el Heni**
> 
> **2021- 2022**


# Architecture du projet:

## Première partie : CAMUNDA avec Spring Boot

> Trop souvent, les processus métiers sont gérés “à la main” dans notre
> code Java. En conséquence, nous faisons notre possible pour les
> simplifier au maximum, le principe agile du ‘Keep It Simple Stupid’
> devant rester à la base de nos applications.
> 
> Pendant longtemps, les BPM (Business Process Manager) ou moteurs de
> workflow ont été zéro-code, coûteuses, non modulaires. Elles ont de ce
> fait mauvaise presse chez les développeurs. De nos jours,il existe des
> BPM légers, embarquables et qui ressemblent à une
> 
> librairie pour les développeurs. Grâce à **Spring Boot et aux spring
> boot starters**, les BPM ont eu droit à plus de liberté.
> 
> La gestion de processus (ou Process Management) représente les
> techniques d'organisation par la décomposition en différents stades de
> réalisation d'une opération économique.
> 
> Un **moteur de workflow** est un dispositif logiciel permettant
> d'exécuter des instances de workflow. Et un workflow est
> l'enchaînement de plusieurs activités décrites au sein d’une
> définition de processus. Il existe des processus purement techniques
> et des processus mixtes (techniques et humains).
> 
> **Business Process Model and Notation (BPMN)** : est un standard pour
> la représentation des processus métiers. Les moteurs de workflow
> actuels sont compatibles avec la version 2 de ce standard ISO/CEI 1951
> (depuis 2013). Il permet de modéliser les processus métiers de manière
> à ce que cette modélisation soit indépendante du moteur de workflow
> utilisé. Par contre, BPMN ne comprend que des éléments de
> représentation, et chaque moteur étend le modèle pour y ajouter des
> éléments d’implémentation (par exemple : quel service appeler pour
> chaque tâche ?). En pratique, il s’agit d’un schéma XML associé à une
> représentation visuelle.
> 
> **Camunda** : est un moteur de workflow Open
> Source, qui peut être embarqué dans les microservices. Il est plus
> vivant, et soutenu par des références solides comme Zalando, Allianz,
> ou Deutsch Bahn. Il possède une version Enterprise avec support.
> Celle-ci s’appuie sur le même moteur que la version Open Source, mais
> fournit des outils de suivi plus complets. Camunda est constitué de
> plusieurs briques/services indépendants : Un moteur (camunda-engine)
> Des applications web pour le suivi et l’instanciation des process
> 
> (optionnelles).
> 
> Camunda Platform offre une grande flexibilité en ce qui concerne
> l'architecture, le déploiement, langages de programmation et pris en
> charge Infrastructure.
> 
> Dans notre cas, le moteur de processus est ajouté en tant que
> bibliothèque d'application.
> 
> De cette façon, le moteur de processus peut facilement être démarré et
> arrêté avec le cycle de vie de l'application. Il est possible
> d'exécuter plusieurs moteurs de processus intégrés sur la base de
> données **.\[1\]**
> 
> Pour cela on initialise notre projet en utilisant Camunda BPM
> Initializr ou on indique les différent GroupeId, Artéfact, version
> camunda, la base de données H2, …, etc.

> projet Interface STS*
> 
> On importe le projet depuis notre IDE Spring Tools Suit STS.
> 
> Démarrage de scolarite.bpmn à l'aide des applications Web Camunda
> Cockpit et Tasklist. Ouvrez le navigateur et entrez l'URL
> <span class="underline">http://localhost:8080/app/welcome</span>

## Deuxième partie : Intégration de Keycloak

> Keycloak est un outil de gestion des identités et d'authentification.
> Il est porté par Red Hat et est open-source. Cet outil est utilisé
> pour le SSO, c'est-à-dire, que pour plusieurs services, on délègue
> l'identification par Keycloak**.\[2\]**
> 
> Camunda fournit déjà un exemple générique pour l'authentification
> unique lors de l'utilisation de Spring Boot. Si l'on a besoin
> d'utiliser les API CamundasIdentityService ou si l'on veut voir les
> utilisateurs et les groupes réels apparaître dans Cockpit, un
> IdentityProvider personnalisé doit également être implémenté.
> 
> Pour notre cas, on utilise Keycloak comme fournisseur d'identité même
> sans SSO. Pour cela on connecte le service d’identité Camunda à
> Keycloak et on se débarrasse de la page de connexion de Cammunda et on
> utilise le SSO.
> 
> On commence par créer un Realm puis un client Spring Boot et on
> configure ce client Keycloak :
> 
> Pour le paramètre ‘Access Type’ il existe trois types possibles :

  - > **Public** : Destiné aux clients côté client qui doivent se
    > connecter au navigateur. Avec une application côté client, il n'y
    > a aucun moyen de garder un secret en sécurité. Au lieu de cela, il
    > est très important de restreindre l'accès en configurant des URI
    > de redirection corrects pour le client.

  - > **BearerOnly** : Signifie que l'application n'autorise que les
    > demandes de jeton du support. Si cette option est activée, cette
    > application ne peut pas participer aux connexions du navigateur.

  - > **Confidential** : Destiné aux clients côté serveur qui doivent
    > effectuer une connexion au navigateur et nécessitent un secret
    > client lorsqu'ils transforment un code d'accès en un jeton d'accès
    > (veuillez consulter « demande de jeton d'accès dans la
    > spécification OAuth 2.0 » pour plus de détails). Ce type doit
    > être utilisé pour les applications côté serveur.

> On choisit le type ‘confidential’ pour pouvoir accéder à Camunda via
> le ‘Login Flow’
> 
> 
> On utilise l'intégration d'Oauth2 offert par Spring Security.
> 
> On ajoute **spring-boot-starter-security** et
> **spring-security-oauth2-autoconfigure** à nos dépendances. On ajoute
> la classe ‘**KeycloakAuthenticationProvider**’

> 
> On configure les différents attributs de configuration Keycloak :
> ‘client-id’, ‘client-secret’, ‘accessTokenUri’,
> ‘userAuthorizationUri’ et ‘scope’ dans le fichier
> ‘application.yaml’.

![image10](https://user-images.githubusercontent.com/32374946/168788222-8fc160df-39fb-4d2d-a9fc-8f1158fa075a.png)

> *Figure 1 Schéma architecture partie 2*

## Troisième partie : Intégration du serveur client Angular

> Pour cette partie, on souhaite intégrer un serveur front-end Angular
> pour communiquer avec notre serveur backend Spring boot. Donc il est
> nécessaire de configurer une authentification Keycloak.
> 
> On commence tout d’abord par créer notre projet Angular avec la
> commande «**ng new project**» et on ajoute les dépendances de keycloak
> : ‘keycloak-js’ et ‘keycloack-angular’
> 
> On créer après, un nouveau client keycloak pour notre application
> front-end et on le configure à access type public : parcequ’ on veut
> avoir seulement la page de connexion par défaut fournie par keycloak.

> 
> Pour résoudre le problème CORS on ajoute un fichier ‘proxy.config.js’
> et on le met à jour dans ‘package.json’.
> 
> Puis on met à jour ‘environement.ts’ pour sauvegarder les attributs de
> configuration Keycloak.


![image14](https://user-images.githubusercontent.com/32374946/168788237-78d4c6e2-8d18-4976-bbe9-1950c716ba08.png)
> *Figure 2 Schéma architecture partie 3*
> 
> En implémentant un processus **Camunda** dans notre application, nous
> sommes obligés de traiter plusieurs formulaires tout au long de notre
> processus. Pour accélérer et faciliter la génération de ces
> formulaires, nous avons créé un modèle de formulaire dynamique basé
> sur des métadonnées sous format JSON qui sont extraites depuis l’API
> camunda. Ensuite, nous avons utilisé ces modèle pour générer
> automatiquement de nouveaux formulaires, en fonction des modifications
> du modèle de données (JSON).
> 
> Nous avons créé pour cela deux formulaires dynamiques : le premier
> pour répondre aux

> 
> questions pour lancer un nouveau processus et le deuxième pour valider
> une tâche (task). Pour construire ces formulaires génériques nous
> avons suivi les étapes suivantes :

1.  > Activer les formulaires réactifs pour notre projet.

2.  > Créer un modèle d'objet de formulaire capable de décrire tous les
    > scénarios requis par la fonctionnalité du formulaire.

3.  > Définir les classes de contrôle dans notre cas ‘TextboxQuestion’
    > et ‘DropdownQuestion’.

4.  > Composer des groupes de formulaires
    > :‘QuestionControlServicecollecte’ un ensemble d'
    > FormGroupinstances qui consomment les métadonnées du modèle donné
    > sous format JSON.

5.  > Composer le contenu d'un formulaire dynamique : Le
    > DynamicFormQuestionComponentcrée des groupes de formulaires et les
    > renseigne avec les contrôles définis dans le modèle de question,
    > en spécifiant les règles d'affichage et de validation.

6.  > Fournir des données sous format JSON depuis le
    > serviceCamundaService.

7.  > Créer un modèle de formulaire dynamique : 'DynamicFormComponent'
    > composant est le point d'entrée et le conteneur principal du
    > formulaire.

![img](https://user-images.githubusercontent.com/32374946/168792111-0e1cece5-56a3-4478-be8a-351600e9cb94.JPG)
> *Figure 3 SYSTÉME DE GÉNÉRATION DE FORMULAIRES DYNAMIQUES*

> Bibliographie

1.  > :
    > [<span class="underline">https://blog.ippon.fr/2018/01/04/gestion-des-processus-metiers-embarquer-un-moteur-</span>](https://blog.ippon.fr/2018/01/04/gestion-des-processus-metiers-embarquer-un-moteur-bpm-dans-votre-application-jhipster/)
    > [<span class="underline">bpm-dans-votre-application-jhipster/</span>](https://blog.ippon.fr/2018/01/04/gestion-des-processus-metiers-embarquer-un-moteur-bpm-dans-votre-application-jhipster/)

2.  > :
    > [<span class="underline">https://blog.desdelinux.net/fr/keycloak-una-solucion-de-gestion-de-acceso-e-identidad-</span>](https://blog.desdelinux.net/fr/keycloak-una-solucion-de-gestion-de-acceso-e-identidad-de-codigo-abierto/)
    > [<span class="underline">de-codigo-abierto/</span>](https://blog.desdelinux.net/fr/keycloak-una-solucion-de-gestion-de-acceso-e-identidad-de-codigo-abierto/)




