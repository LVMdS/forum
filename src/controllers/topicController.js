const Topic = require('../models/topicModel');
const User = require('../models/userModel');

// Criar tópico
exports.createTopic = async (req, res) => {
  const { title, message, courseName } = req.body;
  const author = req.user.id;

  try {
    const newTopic = new Topic({ title, message, courseName, author });
    await newTopic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar tópico' });
  }
};

// Listar todos os tópicos
exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find().populate('author', 'username');
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar tópicos' });
  }
};

// Atualizar tópico
exports.updateTopic = async (req, res) => {
  const { title, message } = req.body;
  const topicId = req.params.id;

  try {
    const topic = await Topic.findById(topicId);
    if (topic.author.toString() !== req.user.id)
      return res.status(403).json({ message: 'Não autorizado' });

    topic.title = title;
    topic.message = message;
    await topic.save();
    res.json(topic);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar tópico' });
  }
};

// Deletar tópico
exports.deleteTopic = async (req, res) => {
  const topicId = req.params.id;

  try {
    const topic = await Topic.findById(topicId);
    if (topic.author.toString() !== req.user.id)
      return res.status(403).json({ message: 'Não autorizado' });

    await topic.remove();
    res.status(200).json({ message: 'Tópico deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar tópico' });
  }
};
