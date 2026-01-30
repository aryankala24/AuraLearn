// quizData.js
const quizzes = {
    ml: [
        { question: "What is the primary goal of supervised learning?", options: ["Data clustering", "Pattern discovery", "Label prediction", "Reinforcement"], answer: "Label prediction" },
        { question: "Which algorithm is best for classification?", options: ["K-Means", "Linear Regression", "Decision Tree", "PCA"], answer: "Decision Tree" },
        { question: "Which metric is used for regression?", options: ["Accuracy", "Precision", "Mean Squared Error", "Recall"], answer: "Mean Squared Error" },
        { question: "Which of these is a lazy learner?", options: ["Decision Tree", "KNN", "SVM", "Logistic Regression"], answer: "KNN" },
        { question: "Which library is most commonly used for ML?", options: ["NumPy", "Matplotlib", "Scikit-learn", "Seaborn"], answer: "Scikit-learn" },
        { question: "What does 'overfitting' mean?", options: ["High bias", "High variance", "Low variance", "Perfect model"], answer: "High variance" },
        { question: "Which method is used to select features?", options: ["Bagging", "PCA", "Boosting", "Stacking"], answer: "PCA" },
        { question: "Which is not a supervised algorithm?", options: ["Random Forest", "KNN", "K-Means", "SVM"], answer: "K-Means" },
        { question: "Which technique is used to improve generalization?", options: ["Overfitting", "Cross-validation", "Biasing", "Clustering"], answer: "Cross-validation" },
        { question: "Which term defines inputs to a model?", options: ["Features", "Labels", "Accuracy", "Precision"], answer: "Features" }
    ],
    dl: [
        { question: "What is a common activation function?", options: ["ReLU", "Softmax", "Sigmoid", "All of the above"], answer: "All of the above" },
        { question: "What is backpropagation used for?", options: ["Initializing weights", "Calculating output", "Updating weights", "Normalizing data"], answer: "Updating weights" },
        { question: "What is the vanishing gradient problem?", options: ["No loss", "Gradients get smaller", "Gradient explosion", "Memory overflow"], answer: "Gradients get smaller" },
        { question: "Which layer type is used in CNNs?", options: ["Recurrent", "Fully-connected", "Convolutional", "Transformer"], answer: "Convolutional" },
        { question: "What does dropout prevent?", options: ["Underfitting", "Overfitting", "Training", "Bias"], answer: "Overfitting" },
        { question: "Which network is used for sequence data?", options: ["CNN", "RNN", "MLP", "GAN"], answer: "RNN" },
        { question: "Which deep learning framework is by Google?", options: ["PyTorch", "Scikit", "TensorFlow", "Keras"], answer: "TensorFlow" },
        { question: "GANs are used for?", options: ["Clustering", "Classification", "Data Generation", "Dimensionality reduction"], answer: "Data Generation" },
        { question: "Which optimizer is most popular?", options: ["SGD", "Adam", "RMSProp", "Adagrad"], answer: "Adam" },
        { question: "What is the first layer in a neural network?", options: ["Output layer", "Activation layer", "Input layer", "Hidden layer"], answer: "Input layer" }
    ],
    nlp: [
        { question: "What does NLP stand for?", options: ["Neural Language Processing", "Natural Learning Processing", "Natural Language Processing", "Neural Learning Program"], answer: "Natural Language Processing" },
        { question: "Which model is commonly used for word embeddings?", options: ["SVM", "Word2Vec", "KNN", "Naive Bayes"], answer: "Word2Vec" },
        { question: "What is tokenization?", options: ["Model evaluation", "Dividing text into sentences or words", "POS tagging", "Removing stopwords"], answer: "Dividing text into sentences or words" },
        { question: "Which task does Named Entity Recognition (NER) perform?", options: ["Text generation", "Entity identification", "Sentiment analysis", "Topic modeling"], answer: "Entity identification" },
        { question: "What is lemmatization?", options: ["Changing words to past tense", "Reducing words to base form", "Text summarization", "Removing punctuation"], answer: "Reducing words to base form" },
        { question: "Which model uses self-attention?", options: ["RNN", "LSTM", "Transformer", "Naive Bayes"], answer: "Transformer" },
        { question: "What is a stopword?", options: ["A rare word", "A keyword", "Common words with little meaning", "Out-of-vocabulary word"], answer: "Common words with little meaning" },
        { question: "Which is a sequence-to-sequence model?", options: ["CNN", "Autoencoder", "Encoder-Decoder", "GAN"], answer: "Encoder-Decoder" },
        { question: "What does BLEU score evaluate?", options: ["Model loss", "Classification accuracy", "Text similarity", "Machine translation"], answer: "Machine translation" },
        { question: "Which model is pretrained for NLP tasks?", options: ["VGG16", "ResNet", "BERT", "YOLO"], answer: "BERT" }
    ],
    cv: [
        { question: "What does CV stand for in AI?", options: ["Continuous Vision", "Computerized Video", "Computer Vision", "Cognitive Vision"], answer: "Computer Vision" },
        { question: "Which algorithm detects objects in images?", options: ["YOLO", "SVM", "LSTM", "KNN"], answer: "YOLO" },
        { question: "What is image classification?", options: ["Grouping images", "Generating captions", "Assigning labels to images", "Image compression"], answer: "Assigning labels to images" },
        { question: "What is the main layer used in CNNs?", options: ["Recurrent Layer", "Dropout Layer", "Convolutional Layer", "Dense Layer"], answer: "Convolutional Layer" },
        { question: "Which dataset is used for object detection?", options: ["MNIST", "CIFAR-10", "ImageNet", "COCO"], answer: "COCO" },
        { question: "Which method helps reduce overfitting in CV?", options: ["Data augmentation", "Batch normalization", "ReLU", "Learning rate decay"], answer: "Data augmentation" },
        { question: "What is semantic segmentation?", options: ["Finding object boundaries", "Classifying whole image", "Classifying each pixel", "Compressing image"], answer: "Classifying each pixel" },
        { question: "Which is a popular pre-trained CV model?", options: ["GPT-3", "BERT", "ResNet", "Word2Vec"], answer: "ResNet" },
        { question: "What does Non-Maximum Suppression do?", options: ["Blurs images", "Combines multiple predictions", "Filters overlapping boxes", "Adds noise"], answer: "Filters overlapping boxes" },
        { question: "Which of the following is NOT a CV task?", options: ["Object tracking", "Image captioning", "Face detection", "POS tagging"], answer: "POS tagging" }
    ],
    robotics: [
        { question: "What is the purpose of actuators in robots?", options: ["Perception", "Thinking", "Movement", "Planning"], answer: "Movement" },
        { question: "Which sensor is used for measuring distance?", options: ["GPS", "LIDAR", "Camera", "Thermal sensor"], answer: "LIDAR" },
        { question: "What is SLAM in robotics?", options: ["Signal Loss And Mapping", "Simultaneous Localization And Mapping", "Sensor Location Algorithm", "Simple Logic And Movement"], answer: "Simultaneous Localization And Mapping" },
        { question: "Which algorithm helps in path planning?", options: ["YOLO", "A*", "SVM", "GAN"], answer: "A*" },
        { question: "What type of robot mimics human motion?", options: ["Humanoid", "Drone", "Crawler", "Autonomous car"], answer: "Humanoid" },
        { question: "What is inverse kinematics?", options: ["Finding position from angles", "Finding angles from position", "Path finding", "Sensor fusion"], answer: "Finding angles from position" },
        { question: "What does ROS stand for?", options: ["Robot Operating System", "Robotic Optimization Software", "Reactive Operating Stack", "Remote Operating System"], answer: "Robot Operating System" },
        { question: "What is the function of a microcontroller?", options: ["Vision processing", "Decision making", "Motor control", "Power supply"], answer: "Motor control" },
        { question: "Which robot part senses the environment?", options: ["Actuator", "Sensor", "Controller", "Effector"], answer: "Sensor" },
        { question: "Which robot type flies autonomously?", options: ["Rover", "Drone", "Crawler", "Arm"], answer: "Drone" }
    ],
    aiethics: [
        { question: "What is a key concern in AI ethics?", options: ["Battery life", "Bias", "Code length", "Execution speed"], answer: "Bias" },
        { question: "What does 'AI transparency' refer to?", options: ["Source code access", "Understanding decisions", "Speed", "Graphics"], answer: "Understanding decisions" },
        { question: "Which principle ensures fairness?", options: ["Explainability", "Accountability", "Non-discrimination", "Autonomy"], answer: "Non-discrimination" },
        { question: "What is algorithmic bias?", options: ["Slow code", "Human error", "Unfair decisions from data", "Hardware issue"], answer: "Unfair decisions from data" },
        { question: "Which area is impacted by AI ethics?", options: ["Education", "Healthcare", "Justice", "All of the above"], answer: "All of the above" },
        { question: "What does GDPR focus on?", options: ["AI training", "Data protection", "Cloud computing", "Hardware security"], answer: "Data protection" },
        { question: "What is 'black box' in AI?", options: ["Unknown AI model", "Uninterpretable model", "Hidden dataset", "Virus"], answer: "Uninterpretable model" },
        { question: "What is explainable AI (XAI)?", options: ["Complex models", "Accurate results", "Human-understandable models", "Chatbots"], answer: "Human-understandable models" },
        { question: "Who is responsible for AI decisions?", options: ["Developers", "Data scientists", "Policymakers", "All of the above"], answer: "All of the above" },
        { question: "What is 'AI alignment'?", options: ["Fitting a model", "Matching hardware", "Aligning AI goals with humans", "Updating software"], answer: "Aligning AI goals with humans" }
    ],
    gpt: [
        { question: "What does GPT stand for?", options: ["General Predictive Transformer", "Generative Pre-trained Transformer", "Generated Processing Token", "General Purpose Transformer"], answer: "Generative Pre-trained Transformer" },
        { question: "Who developed GPT models?", options: ["Google", "Meta", "OpenAI", "Microsoft"], answer: "OpenAI" },
        { question: "What is a transformer?", options: ["A deep learning model", "Data cleaning tool", "Hardware device", "A loss function"], answer: "A deep learning model" },
        { question: "What is GPT mainly used for?", options: ["Image classification", "Video generation", "Text generation", "Speech detection"], answer: "Text generation" },
        { question: "What is 'fine-tuning'?", options: ["Data labeling", "Adjusting a pretrained model", "Writing new code", "Removing errors"], answer: "Adjusting a pretrained model" },
        { question: "What is a token in GPT?", options: ["User input", "Model name", "Unit of text", "Layer"], answer: "Unit of text" },
        { question: "Which is the latest GPT model (as of 2025)?", options: ["GPT-3", "GPT-4", "GPT-4.5", "GPT-5"], answer: "GPT-4.5" },
        { question: "What is 'prompt engineering'?", options: ["Training a model", "Crafting inputs for models", "Debugging", "Visualization"], answer: "Crafting inputs for models" },
        { question: "Which task GPT is NOT designed for?", options: ["Image recognition", "Code generation", "Essay writing", "Summarization"], answer: "Image recognition" },
        { question: "What helps control GPT responses?", options: ["Filters", "Temperature", "Dataset", "Model size"], answer: "Temperature" }
    ],
    datascience: [
        { question: "What is the first step in data science?", options: ["Modeling", "Evaluation", "Data cleaning", "Data collection"], answer: "Data collection" },
        { question: "Which language is popular in data science?", options: ["C++", "Java", "Python", "HTML"], answer: "Python" },
        { question: "What is data wrangling?", options: ["Deleting data", "Storing data", "Cleaning and organizing data", "Downloading data"], answer: "Cleaning and organizing data" },
        { question: "Which library is used for data visualization?", options: ["Pandas", "NumPy", "Matplotlib", "Sklearn"], answer: "Matplotlib" },
        { question: "What does EDA stand for?", options: ["Extreme Data Analysis", "Exploratory Data Analysis", "Extended Data Access", "Easy Data Analysis"], answer: "Exploratory Data Analysis" },
        { question: "Which technique reduces dimensionality?", options: ["SVM", "PCA", "CNN", "Naive Bayes"], answer: "PCA" },
        { question: "What does a confusion matrix evaluate?", options: ["Data size", "Data quality", "Model performance", "Clustering"], answer: "Model performance" },
        { question: "Which file format is common in data science?", options: ["PNG", "CSV", "MP3", "EXE"], answer: "CSV" },
        { question: "Which role focuses on modeling?", options: ["Data Engineer", "Statistician", "Data Analyst", "Data Scientist"], answer: "Data Scientist" },
        { question: "What is correlation?", options: ["Data cleaning", "Model tuning", "Relationship between variables", "Prediction score"], answer: "Relationship between variables" }
    ],
    rl: [
        { question: "What does RL stand for?", options: ["Robot Learning", "Reinforcement Learning", "Regularized Learning", "Robotic Logic"], answer: "Reinforcement Learning" },
        { question: "What is a reward in RL?", options: ["A bonus", "Feedback signal", "Dataset", "Loss function"], answer: "Feedback signal" },
        { question: "What is an agent in RL?", options: ["Algorithm", "Data", "Environment", "Decision maker"], answer: "Decision maker" },
        { question: "What is Q-learning?", options: ["Supervised model", "Model-free RL", "Unsupervised algorithm", "Data cleaner"], answer: "Model-free RL" },
        { question: "What is a policy?", options: ["Action strategy", "Data filter", "Model loss", "Learning rate"], answer: "Action strategy" },
        { question: "Which environment is often used in RL?", options: ["MNIST", "CIFAR-10", "OpenAI Gym", "BERT"], answer: "OpenAI Gym" },
        { question: "What does exploration mean in RL?", options: ["Using known actions", "Trying new actions", "Ignoring feedback", "Training slower"], answer: "Trying new actions" },
        { question: "What is the opposite of exploration?", options: ["Exploitation", "Overfitting", "Regularization", "Backpropagation"], answer: "Exploitation" },
        { question: "What is temporal difference learning?", options: ["Future reward estimation", "Past data learning", "Classification", "Reward shaping"], answer: "Future reward estimation" },
        { question: "Which method combines deep learning with RL?", options: ["DQN", "CNN", "RNN", "SVM"], answer: "DQN" }
    ],
    aiinfra: [
        { question: "What is AI Infrastructure?", options: ["AI models", "Hardware and software supporting AI", "Data analysis", "Robotics"], answer: "Hardware and software supporting AI" },
        { question: "Which chip is preferred for AI?", options: ["CPU", "GPU", "HDD", "SSD"], answer: "GPU" },
        { question: "What is edge computing?", options: ["Cloud storage", "On-device processing", "Server-side AI", "Distributed model"], answer: "On-device processing" },
        { question: "Which cloud service offers AI tools?", options: ["AWS", "Azure", "GCP", "All of the above"], answer: "All of the above" },
        { question: "What is containerization?", options: ["Model tuning", "Running code in isolated units", "File storage", "Data cleaning"], answer: "Running code in isolated units" },
        { question: "Which tool is used for containerization?", options: ["TensorFlow", "Docker", "Pandas", "Jupyter"], answer: "Docker" },
        { question: "Which term defines scaling AI systems?", options: ["Parallelism", "Replication", "Latency", "Optimization"], answer: "Parallelism" },
        { question: "What is Kubernetes used for?", options: ["Model training", "Data wrangling", "Orchestration of containers", "Visualization"], answer: "Orchestration of containers" },
        { question: "What is a TPU?", options: ["Training Python Utility", "Tensor Processing Unit", "Test Processing Unit", "Transformer Processor"], answer: "Tensor Processing Unit" },
        { question: "Which format stores ML models?", options: ["CSV", "ONNX", "TXT", "JPG"], answer: "ONNX" }
    ],
    vision: [
        { question: "What is the focus of vision in AI?", options: ["Text analysis", "Speech recognition", "Image understanding", "Code generation"], answer: "Image understanding" },
        { question: "Which model is commonly used in vision tasks?", options: ["RNN", "CNN", "LSTM", "SVM"], answer: "CNN" },
        { question: "What does OCR stand for?", options: ["Open Camera Recognition", "Optical Character Recognition", "Object Camera Rendering", "Output Character Recognition"], answer: "Optical Character Recognition" },
        { question: "Which dataset is for handwritten digits?", options: ["COCO", "MNIST", "ImageNet", "CIFAR-10"], answer: "MNIST" },
        { question: "Which is NOT a vision technique?", options: ["Edge detection", "Image classification", "Object tracking", "Sentiment analysis"], answer: "Sentiment analysis" },
        { question: "What is the function of pooling in CNN?", options: ["Upsampling", "Downsampling", "Segmentation", "Normalization"], answer: "Downsampling" },
        { question: "What is a bounding box?", options: ["Image format", "Object localization box", "Data label", "Color map"], answer: "Object localization box" },
        { question: "Which model can generate images?", options: ["GAN", "SVM", "RNN", "BERT"], answer: "GAN" },
        { question: "Which metric is used for object detection?", options: ["mAP", "BLEU", "F1-score", "ROUGE"], answer: "mAP" },
        { question: "Which transformation flips an image?", options: ["Rotation", "Zoom", "Flip", "Translation"], answer: "Flip" }
    ],
    search: [
        { question: "What is search in AI?", options: ["Sorting data", "Finding optimal path", "Image filtering", "Summarizing text"], answer: "Finding optimal path" },
        { question: "Which is an uninformed search?", options: ["A*", "Greedy", "DFS", "Heuristic"], answer: "DFS" },
        { question: "What does BFS stand for?", options: ["Best First Search", "Breadth First Search", "Binary Fast Search", "Branching First Search"], answer: "Breadth First Search" },
        { question: "What is the goal of heuristic search?", options: ["Fast input", "Optimal performance", "Guided exploration", "Shuffling data"], answer: "Guided exploration" },
        { question: "What is the cost in A* search?", options: ["Only heuristic", "Only path length", "Heuristic + path cost", "None"], answer: "Heuristic + path cost" },
        { question: "What is iterative deepening?", options: ["Increasing dataset", "Repeating search", "Limited-depth DFS", "Parallel search"], answer: "Limited-depth DFS" },
        { question: "Which search uses a priority queue?", options: ["Greedy", "DFS", "BFS", "A*"], answer: "A*" },
        { question: "What is the branching factor?", options: ["Speed of code", "Node memory", "Number of children per node", "Height of tree"], answer: "Number of children per node" },
        { question: "What type of search is hill climbing?", options: ["Local search", "Tree search", "DFS", "BFS"], answer: "Local search" },
        { question: "Which strategy uses a heuristic function?", options: ["DFS", "BFS", "A*", "Uniform Cost Search"], answer: "A*" }

    ],
};

export default quizzes;