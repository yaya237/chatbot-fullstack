# chatbot-fullstack

front : http://a01010dc1bc444dd6b4c1f39877570d5-1461664018.us-east-1.elb.amazonaws.com

back : http://aa8ce2e1ead214341a15bdeca2e4a7e0-1116609328.us-east-1.elb.amazonaws.com:8080

grafana : http://a6dd1ee38fca04f28a243ea93acd91fd-1926250368.us-east-1.elb.amazonaws.com/d/5fa81a1e-fe3a-44dc-abfd-e507edf23658/kubernetes-cluster-monitoring-via-prometheus?orgId=1&from=now-5m&to=now&timezone=browser&var-Node=$__all&refresh=10s


Dans le cadre d’un projet personnel, je développe actuellement un chatbot intelligent reposant sur un frontend React et un backend Node.js.
L’objectif est de concevoir et déployer une application complète, en prenant en charge l’ensemble du cycle de vie du projet : conception, développement, déploiement et supervision en production.
J’ai d’abord défini une architecture robuste et scalable, fondée sur les bonnes pratiques du Cloud et du DevOps, et déployée sur des clusters Kubernetes afin d’assurer une gestion optimale des conteneurs et des services.
Sur le plan de l’infrastructure, j’automatise les déploiements et les configurations à l’aide de Terraform et Ansible, garantissant ainsi des environnements cohérents et reproductibles. Le monitoring est assuré par Prometheus et Grafana, offrant une visibilité complète sur les performances et facilitant la détection proactive des anomalies.
Le projet repose sur AWS pour la première version et sur Azure pour la suivante, afin de comparer la flexibilité, la sécurité et la gestion des ressources entre les deux environnements. J’y intègre également des pipelines CI/CD GitLab pour automatiser les livraisons continues et renforcer la fiabilité du processus de mise à jour.
Ce projet constitue une excellente opportunité pour approfondir mes compétences en développement full-stack tout en maîtrisant l’écosystème DevOps dans sa globalité — de l’automatisation et la sécurité jusqu’à l’optimisation des performances et la gestion d’infrastructures cloud.

Super Yahya 👍
Voici la version complète, claire et professionnelle de ton **`README.md`**, dans un ton à la fois **pédagogique et impressionnant** — idéale pour ton GitHub et ton portfolio :

---

```markdown
# 🤖 Chatbot Fullstack — React, Node.js & DevOps on AWS EKS

## 🚀 Introduction

Ce projet s’inscrit dans le cadre d’un **développement personnel complet** visant à concevoir, déployer et superviser un **chatbot intelligent** reposant sur une architecture fullstack moderne.  
L’objectif est de couvrir **l’intégralité du cycle de vie logiciel** — de la conception à la mise en production — en appliquant les meilleures pratiques du **Cloud** et du **DevOps**.

Le projet repose sur :
- un **frontend React**, pour l’interface utilisateur ;
- un **backend Node.js / Express**, pour la logique et la communication avec l’API d’intelligence artificielle ;
- un **déploiement sur AWS EKS (Elastic Kubernetes Service)**, pour la scalabilité et la haute disponibilité ;
- une **supervision complète via Prometheus et Grafana**, garantissant une observabilité continue.

---

## 🏗️ Architecture globale

### 🔹 Schéma logique

```

React (Frontend)
↓
Node.js / Express (Backend API)
↓
AWS EKS (Pods / Services / Load Balancers)
↓
Prometheus & Grafana (Monitoring)

````

### 🔹 Composants principaux
| Couche | Technologie | Description |
|--------|--------------|-------------|
| Frontend | React + Axios | Interface utilisateur et gestion des requêtes API |
| Backend | Node.js + Express | API REST communiquant avec OpenAI |
| Containerisation | Docker | Conteneurisation du frontend et du backend |
| Orchestration | Kubernetes (EKS) | Gestion des pods, déploiements et services |
| Infrastructure as Code | Terraform & Ansible | Création et configuration automatisée des ressources AWS |
| CI/CD | GitLab CI/CD | Build, test et déploiement automatisés |
| Monitoring | Prometheus + Grafana | Collecte et visualisation des métriques applicatives |

---

## ⚙️ Installation et exécution locale

### 🧩 Prérequis
- **Node.js** (v18+)
- **Docker** et **Docker Compose**
- **AWS CLI** et **kubectl** configurés
- **Git**

### 🧭 Étapes d’installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/yaya237/chatbot-fullstack.git
cd chatbot-fullstack

# 2. Construire les images Docker
docker compose build

# 3. Lancer le projet en local
docker compose up -d

# 4. Vérifier les conteneurs
docker ps -a

# 5. Arrêter les services
docker compose down
````

### 🔗 Accès local

* Frontend : [http://localhost:3000](http://localhost:3000)
* Backend : [http://localhost:8080](http://localhost:8080)

---

## ☁️ Déploiement sur AWS EKS

Le projet est déployé sur un **cluster Kubernetes AWS EKS**.
Chaque composant (frontend, backend, monitoring) est défini dans un manifest YAML.

### 🧱 Étapes principales

```bash
# 1. Créer le cluster EKS
eksctl create cluster --name chatbot-cluster --region us-east-1

# 2. Déployer le backend
kubectl apply -f backend-deployment.yaml

# 3. Déployer le frontend
kubectl apply -f frontend-deployment.yaml

# 4. Vérifier les pods et services
kubectl get pods
kubectl get svc
```

### 🌍 Services en ligne

* **Frontend :**
  [http://a01010dc1bc444dd6b4c1f39877570d5-1461664018.us-east-1.elb.amazonaws.com](http://a01010dc1bc444dd6b4c1f39877570d5-1461664018.us-east-1.elb.amazonaws.com)
* **Backend :**
  [http://aa8ce2e1ead214341a15bdeca2e4a7e0-1116609328.us-east-1.elb.amazonaws.com:8080](http://aa8ce2e1ead214341a15bdeca2e4a7e0-1116609328.us-east-1.elb.amazonaws.com:8080)
* **Grafana (Monitoring) :**
  [http://a6dd1ee38fca04f28a243ea93acd91fd-1926250368.us-east-1.elb.amazonaws.com/d/5fa81a1e-fe3a-44dc-abfd-e507edf23658/kubernetes-cluster-monitoring-via-prometheus](http://a6dd1ee38fca04f28a243ea93acd91fd-1926250368.us-east-1.elb.amazonaws.com/d/5fa81a1e-fe3a-44dc-abfd-e507edf23658/kubernetes-cluster-monitoring-via-prometheus)

---

## 🔄 CI/CD avec GitLab

Le pipeline GitLab CI/CD automatise les étapes de **build**, **test** et **déploiement** sur AWS.

### 🧩 Exemple de pipeline `.gitlab-ci.yml`

```yaml
stages:
  - build
  - deploy

build:
  stage: build
  script:
    - docker build -t chatbot-frontend ./chatbot-frontend
    - docker build -t chatbot-backend ./chatbot-backend
  only:
    - main

deploy:
  stage: deploy
  script:
    - kubectl apply -f frontend-deployment.yaml
    - kubectl apply -f backend-deployment.yaml
  environment:
    name: production
```

🔒 Les variables sensibles (API keys, URLs, credentials) sont gérées via **les variables GitLab CI** et non stockées dans le code.

---

## 📊 Monitoring et observabilité

Le monitoring repose sur **Prometheus** (métriques système) et **Grafana** (visualisation).
Cela permet de :

* suivre la consommation CPU/mémoire des pods,
* identifier les anomalies,
* surveiller la disponibilité de l’application en temps réel.

🖥️ **Dashboard Grafana disponible ici :**
[Accéder au tableau de bord](http://a6dd1ee38fca04f28a243ea93acd91fd-1926250368.us-east-1.elb.amazonaws.com/d/5fa81a1e-fe3a-44dc-abfd-e507edf23658/kubernetes-cluster-monitoring-via-prometheus)

---

## 🧰 Stack technique

| Domaine          | Technologies            |
| ---------------- | ----------------------- |
| Frontend         | React, Axios, HTML, CSS |
| Backend          | Node.js, Express        |
| Conteneurisation | Docker                  |
| Orchestration    | Kubernetes (EKS)        |
| Infrastructure   | Terraform, Ansible      |
| Cloud            | AWS                     |
| CI/CD            | GitLab                  |
| Monitoring       | Prometheus, Grafana     |

---

## 🔮 Évolutions prévues

* Portage du projet sur **Azure Kubernetes Service (AKS)**
* Intégration d’une base de données NoSQL (MongoDB ou DynamoDB)
* Optimisation du pipeline CI/CD avec **tests unitaires automatisés**
* Implémentation d’un **NLP plus avancé** (RAG / OpenAI fine-tuning)

---

## 🙋‍♂️ Auteur

**Yahya Bougna**
Ingénieur passionné par la **cybersécurité**, le **cloud computing** et les **technologies DevOps**.
J’accorde une grande importance au **travail en équipe**, à la **rigueur** et à la **curiosité technique**.
Ce projet illustre ma volonté de **concevoir des systèmes fiables, scalables et sécurisés** dans un environnement cloud moderne.

📫 Contact : [LinkedIn](https://www.linkedin.com/in/yahya-bougna) — [GitHub](https://github.com/yaya237)

---

> 💡 *Ce projet personnel m’a permis d’explorer le cycle complet du DevOps — de la conception à la supervision — tout en consolidant mes compétences en développement fullstack et en infrastructure cloud.*

```

---

Souhaites-tu que je te rédige maintenant le **plan du Wiki GitHub** (avec le contenu de chaque page, prêt à copier-coller dans la section Wiki) ?  
Ce serait la suite logique pour renforcer ton profil devant les recruteurs.
```

