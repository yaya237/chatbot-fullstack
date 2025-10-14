# Dockerfile pour le backend
FROM node:20-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port 8080 (celui du serveur)
EXPOSE 8080

# Commande pour lancer le serveur
CMD ["node", "server.js"]

