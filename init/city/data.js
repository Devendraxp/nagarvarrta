const { default: mongoose } = require("mongoose");

const indianCities = [
    //rajasthan cities
    {
        name: "Jaipur",
        description: "Jaipur, the majestic Pink City, enchants visitors with its regal splendor and rich cultural tapestry. From the iconic Hawa Mahal, with its intricate honeycomb facade, to the grandiose Amer Fort, perched on a hilltop, the city is a vibrant blend of historical opulence and lively bazaars. Jaipur’s architectural wonders and colorful festivals make it a must-visit destination for travelers.",
        route: "rajasthan",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1706961121783-4ae6c933983a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II, making it one of the first planned cities in India.",
            key2: "The city is known for its unique pink-colored buildings, a result of the choice of color for the city to welcome the Prince of Wales in 1876.",
            key3: "Jaipur is part of the Golden Triangle tourist circuit, alongside Delhi and Agra.",
            key4: "The Amer Fort, located just outside the city, is a UNESCO World Heritage Site and a symbol of Rajput architecture.",
            key5: "Jaipur is famous for its handicrafts, jewelry, and textiles, showcasing the rich cultural heritage of Rajasthan."
        },
        geocoordinates: "26.9124° N, 75.7873° E",
        state: "Rajasthan",
        croute: "",
    }
    ,
    {
        name: "Udaipur",
        description: "Udaipur, known as the City of Lakes, is famous for its stunning palaces and serene lakes. The city is a romantic destination, offering breathtaking views and rich cultural experiences. Key attractions include the City Palace, Lake Pichola, and the Jag Mandir, which reflect the grandeur of the Mewar dynasty.",
        route: "rajasthan",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1526409560270-44a05fcbf905?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1575941100859-9b19188c41d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1575940937227-69e8c5bdfc80?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Udaipur was founded in 1559 by Maharana Udai Singh II as the capital of the Mewar Kingdom.",
            key2: "The City Palace is a complex of palaces situated in the city, showcasing a blend of European and Indian architectural styles.",
            key3: "Udaipur is famous for its picturesque lakes, which were created to provide irrigation to the city.",
            key4: "The Jag Mandir Palace, located on Lake Pichola, served as a refuge for Shah Jahan during his rebellion against his father.",
            key5: "Udaipur is known for its vibrant arts and crafts scene, with numerous local artisans contributing to the city's cultural heritage."
        },
        geocoordinates: "24.5854° N, 73.7125° E",
        state: "Rajasthan",
        croute: "",
    }
    ,
    {
        name: "Jodhpur",
        description: "Jodhpur, known as the Blue City, is famous for its distinctive blue-painted houses and magnificent forts. The city is home to the imposing Mehrangarh Fort, which offers stunning views of the surrounding area. Jodhpur’s rich history, vibrant bazaars, and royal heritage attract visitors from around the world.",
        route: "rajasthan",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1573870145685-761e0cd03a2e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1561313927553-09b7c15e1832?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1563315776400-1da215d1a6e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Jodhpur was founded in 1459 by Rao Jodha, the chief of the Rathore clan.",
            key2: "The city is known for its unique blue houses, which were originally painted to signify the homes of Brahmins.",
            key3: "Mehrangarh Fort, one of the largest forts in India, was built in 1459 and is known for its intricate carvings.",
            key4: "Jodhpur served as the capital of the Marwar Kingdom and has a rich cultural and historical heritage.",
            key5: "The city is famous for its handicrafts, including textiles and leather goods, showcasing the craftsmanship of local artisans."
        },
        geocoordinates: "26.2389° N, 73.0243° E",
        state: "Rajasthan",
        croute: "",
    }
    ,
    // Uttar Pradesh Cities
    {
        name: "Lucknow",
        description: "Lucknow, the capital of Uttar Pradesh, is known for its rich history, vibrant culture, and stunning Mughal architecture. The city is a delightful blend of the old and new, showcasing exquisite monuments like the Bara Imambara and the Rumi Darwaza. Known for its delectable Awadhi cuisine, Lucknow is a must-visit for history buffs and food lovers alike.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1566913778117-bc206a4d3423?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1581689893482-1107d8c0d2e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1600356440054-4eb624d9a4aa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Lucknow has been an important center of historical significance since the 18th century, known for its unique blend of Persian and Indian culture.",
            key2: "The city played a pivotal role during the First War of Indian Independence in 1857, which is commemorated in various monuments.",
            key3: "The Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is one of the largest vaulted constructions without support beams.",
            key4: "Lucknow's architecture reflects the grandeur of the Mughal and Awadhi periods, making it a treasure trove for architecture enthusiasts.",
            key5: "The city is famous for its annual festivals, including the Lucknow Mahotsav, which celebrates the city's rich cultural heritage."
        },
        geocoordinates: "26.8467° N, 80.9462° E",
        state: "Uttar Pradesh",
        croute: "",
    }
    ,
    {
        name: "Varanasi",
        description: "Varanasi, one of the oldest living cities in the world, is a sacred city for Hindus and is known for its ghats along the Ganges River. It is a place of pilgrimage, spirituality, and learning, where visitors can witness ancient rituals, enjoy the vibrant culture, and explore its historic temples. Varanasi offers a unique blend of tradition and modernity.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1535560930880-e2cbabe3f3cd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1606051329903-b1c9a85f03b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1520521743133-e5e0e16368f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Varanasi is considered the spiritual capital of India, with a history that dates back over 3,000 years.",
            key2: "The city is home to Kashi Vishwanath Temple, one of the most revered Hindu temples dedicated to Lord Shiva.",
            key3: "Varanasi has been a center for learning and culture, attracting scholars, poets, and artists throughout history.",
            key4: "The Ganga Aarti ceremony at the Dashashwamedh Ghat is a significant cultural event that attracts thousands of visitors.",
            key5: "The city has influenced Indian philosophy and spirituality, being the birthplace of several prominent religious leaders and thinkers."
        },
        geocoordinates: "25.3176° N, 82.9739° E",
        state: "Uttar Pradesh",
        croute: "",
    }
    ,
    {
        name: "Agra",
        description: "Agra, home to the world-renowned Taj Mahal, is a city steeped in Mughal history and architectural grandeur. Situated along the banks of the Yamuna River, Agra captivates tourists with its magnificent palaces, gardens, and vibrant culture. The city is a blend of historical significance and modern development, making it a top destination for visitors.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1504197885-609741792ce7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1584997378259-8c85cbd9c17a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1554135480-2c6e8c90d8f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Agra was the capital of the Mughal Empire during the reign of emperors Akbar, Jahangir, and Shah Jahan.",
            key2: "The Taj Mahal, one of the Seven Wonders of the World, was built by Shah Jahan in memory of his wife Mumtaz Mahal in 1653.",
            key3: "Agra Fort, another UNESCO World Heritage Site, was used by the Mughals as a military and royal residence.",
            key4: "Akbar’s tomb, located in Sikandra, is a masterpiece of Mughal architecture that reflects the great emperor's legacy.",
            key5: "Agra was an important center for art, culture, and learning under the Mughals, attracting scholars, artists, and architects from around the world."
        },
        geocoordinates: "27.1767° N, 78.0081° E",
        state: "Uttar Pradesh",
        croute: "",
    },
    {
        name: "Prayagraj",
        description: "Prayagraj, formerly known as Allahabad, is a historic city located at the confluence of the Ganges, Yamuna, and Saraswati rivers. It is renowned for the Kumbh Mela, one of the largest religious gatherings in the world. The city is rich in history and culture, boasting significant landmarks such as the Triveni Sangam, Anand Bhawan, and Allahabad Fort.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1561231980-75cc9e3e14be?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1618849565928-9d1b8911d915?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1563290534-f49f437fa4c1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Prayagraj is an ancient city with historical significance, known for its role in Indian spirituality and politics.",
            key2: "The city is famous for the Kumbh Mela, held every 12 years, attracting millions of pilgrims from across the country.",
            key3: "Anand Bhawan, the ancestral home of the Nehru-Gandhi family, is located in Prayagraj and serves as a museum today.",
            key4: "The Allahabad Fort, built by Emperor Akbar in 1583, is a significant historical monument overlooking the Ganges River.",
            key5: "Prayagraj has been a center of learning and culture, home to many renowned institutions and scholars over the years."
        },
        geocoordinates: "25.4484° N, 81.8330° E",
        state: "Uttar Pradesh",
        croute: "",
    },   

    // Maharashtra Cities
    {
        name: "Mumbai",
        description: "Mumbai, the bustling financial capital of India, is known for its vibrant culture, historical landmarks, and the Bollywood film industry. From the iconic Gateway of India to the stunning Marine Drive, the city offers a mix of modern skyscrapers and colonial architecture. Mumbai's diverse culinary scene, lively markets, and rich heritage make it a must-visit destination.",
        route: "maharashtra",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1551719475-098b3bda6b93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Mumbai was originally a group of islands inhabited by fishing communities and was later transformed into a major trading hub.",
            key2: "The city served as the capital of the British Indian Empire and has many colonial-era buildings.",
            key3: "Mumbai is home to Bollywood, producing the largest number of films in the world.",
            key4: "The city played a pivotal role in India's independence movement and has a rich cultural heritage.",
            key5: "Mumbai's local trains are a lifeline for millions, showcasing the city's fast-paced lifestyle."
        },
        geocoordinates: "19.0760° N, 72.8777° E",
        state: "Maharashtra",
        croute: "",
    }
    ,
    {
        name: "Pune",
        description: "Pune, known as the 'Oxford of the East', is an educational and cultural hub in Maharashtra. The city boasts a rich historical heritage, vibrant nightlife, and a thriving IT industry. With attractions like the Aga Khan Palace, Shaniwar Wada, and the scenic Sinhagad Fort, Pune offers a blend of modernity and tradition.",
        route: "maharashtra",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1587843161386-32c973c40878?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1603156991742-2e0c3f3ec05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1587851201960-82ab0c6d9d61?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Pune was the center of the Maratha Empire and has a rich historical significance.",
            key2: "The city is home to the prestigious University of Pune, founded in 1949.",
            key3: "Pune played a significant role in India's freedom struggle, hosting many social and political movements.",
            key4: "Aga Khan Palace, built in 1892, is a historical monument and a site of national importance.",
            key5: "Pune's cultural scene is marked by various festivals, arts, and literature."
        },
        geocoordinates: "18.5204° N, 73.8567° E",
        state: "Maharashtra",
        croute: "",
    },
    {
        name: "Nagpur",
        description: "Nagpur, known as the 'Orange City', is famous for its delicious oranges and rich history. The city serves as a major commercial and political center in central India. Key attractions include the Deekshabhoomi, a significant Buddhist site, and the Futala Lake, a popular recreational spot.",
        route: "maharashtra",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1584675920209-3b7f773d2af4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1508651097573-e43cc0c8b3f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1516264224886-ec91aeb7f4c3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            key1: "Nagpur is known for its historical significance as the seat of the Vidarbha region.",
            key2: "The city was an important center during the British Raj and has several colonial-era buildings.",
            key3: "Deekshabhoomi is a monument dedicated to Dr. B.R. Ambedkar, symbolizing the conversion of thousands to Buddhism.",
            key4: "Nagpur's orange cultivation began in the 19th century, earning it the nickname 'Orange City'.",
            key5: "The city hosts the Nagpur Municipal Corporation, one of the oldest in India, established in 1864."
        },
        geocoordinates: "21.1458° N, 79.0882° E",
        state: "Maharashtra",
        croute: "",
    },
];


module.exports={data:indianCities};












