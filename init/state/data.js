const statesData = [
    {
      name: "Rajasthan",
      phrase: "The Land of Kings",
      geometry: {
        type: "Point",
        coordinates: [26.2389, 73.0243]
      },
      route:"/rajasthan",
      image: [
        { file_name: "file", img_url: "https://unsplash.com/photos/green-mountain-under-white-sky-during-daytime-DrJtwNe6AcQ" },
        { file_name: "file", img_url: "https://unsplash.com/photos/white-boat-on-sea-under-gray-clouds-VYb9sZFUol4" },
        { file_name: "file", img_url: "https://unsplash.com/photos/a-couple-of-camels-that-are-standing-in-the-dirt-MV1_jLJsNhA" }
      ],
      speciality: ["Handicrafts", "Jewelry", "Textiles"],
      HnC: {
        MnD: "Ghoomar",
        attire: "Ghagra Choli",
        festivals: ["Diwali", "Holi", "Pushkar Camel Fair"],
        folkTales: ["The Legend of Panna Dhai"],
        FnF: ["Khejri Tree", "Great Indian Bustard"],
        lifeStyle: ["Traditional", "Rural"]
      },
      history: {
        war: "Battle of Haldighati",
        ecto: "Rajputana",
        artH: "Rajasthani Miniature Paintings"
      }
    },
    {
      name: "Uttar Pradesh",
      phrase: "The Heartland of India",
      geometry: {
        type: "Point",
        coordinates: [26.8467, 80.9462]
      },
      route:"/up",
      image: [
        { file_name: "file", img_url: "https://unsplash.com/photos/a-very-large-building-with-a-massive-entrance-EOm5YV73zns" },
        { file_name: "file", img_url: "https://unsplash.com/photos/a-large-building-with-columns-and-a-clock-tower-in-the-background-In2FAii6cxc" },
        { file_name: "file", img_url: "https://unsplash.com/photos/a-large-building-with-towers-with-taj-mahal-in-the-background-_P5F9l4XNMA" }
      ],
      speciality: ["Chikan Embroidery", "Zardozi", "Banarasi Silk"],
      HnC: {
        MnD: "Tunday Kababi",
        attire: "Kurta Pajama",
        festivals: ["Diwali", "Holi", "Kumbh Mela"],
        folkTales: ["The Legend of Raja Harishchandra"],
        FnF: ["Ashoka Tree", "Sarus Crane"],
        lifeStyle: ["Traditional", "Urban"]
      },
      history: {
        war: "First War of Indian Independence 1857",
        ecto: "Awadh",
        artH: "Mughal Architecture"
      }
    },
    {
      name: "Maharashtra",
      phrase: "The Gateway of India",
      geometry: {
        type: "Point",
        coordinates: [19.0760, 72.8777]
      },
      route:"/maharashtra",
      image: [
        { file_name: "file", img_url: "https://unsplash.com/photos/grayscale-photo-of-train-rail-lvf0AQTQJyE" },
        { file_name: "file", img_url: "https://unsplash.com/photos/white-and-black-concrete-building-aW8kdtqXMcs" },
        { file_name: "file", img_url: "https://unsplash.com/photos/a-large-building-with-a-red-roof-O6bRaPpZCD0" }
      ],
      speciality: ["Warli Art", "Kolhapuri Chappal", "Paithani Saree"],
      HnC: {
        MnD: "Vada Pav",
        attire: "Nauvari Saree",
        festivals: ["Ganesh Chaturthi", "Diwali", "Gudi Padwa"],
        folkTales: ["The Legend of Shivaji Maharaj"],
        FnF: ["Mango Tree", "Yellow-footed Green Pigeon"],
        lifeStyle: ["Modern", "Urban"]
      },
      history: {
        war: "Battle of Panipat",
        ecto: "Maratha Empire",
        artH: "Ajanta and Ellora Caves"
      }
    }
  ];

  module.exports={data: statesData};