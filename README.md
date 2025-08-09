# ScamBuster – SafeNet.AI

SafeNet.AI is a unified, AI-powered web platform that helps users detect phishing URLs, scam messages, and deepfake content in real time using machine learning and NLP.

---

##  Features

- **Phishing URL Detection**: Classifies URLs using ML models and checks against Google Safe Browsing.
- **Scam Text Analysis**: Detects fraudulent or misleading messages using fine-tuned BERT.
- **Deepfake Detection**: Identifies tampered videos/images using CNNs and ensemble logic.
- **User Dashboard**: Tracks scan history, displays risk scores, and offers personalized alerts.
- **RESTful APIs**: Enables third-party integration with endpoints for URLs, text, and media scanning.
- **Modular Architecture**: Clean separation between frontend (React.js) and backend (Flask + MongoDB).

---

##  Tech Stack

| Component         | Technologies                             |
|------------------|-------------------------------------------|
| Frontend         | React.js, Tailwind CSS                    |
| Backend          | Python, Flask                             |
| ML Frameworks    | PyTorch, TensorFlow, Hugging Face (BERT)  |
| ML Models        | XGBoost (URL), BERT (Text), ResNet-CNN (Media) |
| Database         | MongoDB (Cloud Atlas)                     |
| Hosting          | Vercel (Frontend), Render (Backend)       |
| Integrations     | Google Safe Browsing, VirusTotal, AWS Rekognition |

---

