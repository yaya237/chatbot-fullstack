# Étape 1 : Construire l’application (React/Vite)
FROM node:20-alpine AS build

# Dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Construire le projet (le dossier /build sera créé)
RUN npm run build

# Étape 2 : Servir les fichiers statiques avec NGINX
FROM nginx:alpine

# Copier les fichiers du build dans le répertoire web d’NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 3000 (port externe que tu veux utiliser)
EXPOSE 3000

# Lancer NGINX
CMD ["nginx", "-g", "daemon off;"]

