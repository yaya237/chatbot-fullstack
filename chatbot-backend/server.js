const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Liste de réponses du chatbot
const faq = [
  {
    keywords: ['bonjour', 'salut', 'hello'],
    reply: 'Salut ! Je suis ton assistant pour le projet. Veux-tu en savoir plus sur le projet ou sur les outils utilisés ?',
    suggestions: ['Qu’est-ce que ce projet ?', 'Quels outils utilisez-vous ?', 'Comment ça fonctionne ?']
  },
  {
    keywords: ['projet', 'objectif', 'but'],
    reply: 'Ce projet est un assistant virtuel pour aider à comprendre l’infrastructure, le déploiement et les outils de monitoring.',
    suggestions: ['Comment ça fonctionne ?', 'Quels sont les composants du projet ?']
  },
  {
    keywords: ['fonctionnement', 'comment', 'marche'],
    reply: 'Le projet combine un backend Node.js, un frontend React, et des outils comme Grafana et Prometheus pour le monitoring. Les utilisateurs peuvent poser des questions et obtenir des réponses sur le projet.',
    suggestions: ['Quels outils sont utilisés ?', 'Peux-tu m’expliquer Grafana ?', 'Que fait Prometheus ?']
  },
  {
    keywords: ['grafana'],
    reply: 'Grafana est utilisé pour visualiser les métriques sous forme de dashboards interactifs.',
    suggestions: ['Que fait Prometheus ?', 'Quels types de métriques sont surveillés ?']
  },
  {
    keywords: ['prometheus'],
    reply: 'Prometheus collecte et stocke les métriques du cluster, ce qui permet de surveiller la santé et les performances du système.',
    suggestions: ['Peux-tu m’expliquer Grafana ?', 'Comment ça fonctionne ensemble ?']
  },
  {
    keywords: ['aide', 'support', 'guide'],
    reply: 'Je peux t’expliquer le projet, ses composants, ou te guider dans le déploiement et l’utilisation des outils.',
    suggestions: ['Qu’est-ce que ce projet ?', 'Comment ça fonctionne ?', 'Quels outils utilisez-vous ?']
  },
  {
    keywords: ['merci', 'ok', 'super'],
    reply: 'Avec plaisir ! Tu veux poser une autre question ou que je te propose des questions ?',
    suggestions: ['Oui, propose-moi des questions', 'Non, merci']
  }
];

// Fonction pour trouver la réponse
function getReply(message) {
  const lowerMsg = message.toLowerCase();

  for (const item of faq) {
    if (item.keywords.some(kw => lowerMsg.includes(kw))) {
      return { reply: item.reply, suggestions: item.suggestions };
    }
  }

  // Réponse par défaut
  return { 
    reply: "Je ne suis pas sûr de comprendre. Veux-tu que je te propose des questions ?", 
    suggestions: ['Qu’est-ce que ce projet ?', 'Comment ça fonctionne ?', 'Quels outils utilisez-vous ?'] 
  };
}

// Routes
app.get('/', (req, res) => res.send('🤖 Chatbot Backend Running'));

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const { reply, suggestions } = getReply(message);
  res.json({ reply, suggestions });
});

app.listen(port, () => console.log(`✅ Server running on port ${port}`));
