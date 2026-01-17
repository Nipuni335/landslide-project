const emergencyNotifications = [
  { id: 1, type: "Safety", message: "Avoid traveling near slopes." },
  { id: 2, type: "Evacuation", message: "Evacuate Nuwara Eliya immediately." },
  { id: 3, type: "Helpline", message: "Call 011-1234567 for assistance." },
];

const getEmergencyNotifications = (req, res) => {
  res.json(emergencyNotifications);
};

module.exports = { getEmergencyNotifications };
