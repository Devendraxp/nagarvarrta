const { default: mongoose } = require("mongoose");

const indianCities = [
    //rajasthan cities
    {
        name: "Jaipur",
        description: "Jaipur, the majestic Pink City, enchants visitors with its regal splendor and rich cultural tapestry. From the iconic Hawa Mahal, with its intricate honeycomb facade, to the grandiose Amer Fort, perched on a hilltop, the city is a vibrant blend of historical opulence and lively bazaars. Jaipur's architectural wonders and colorful festivals make it a must-visit destination for travelers.",
        route: "rajasthan",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1706961121783-4ae6c933983a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Jaipur, the fierce heart of Rajput valor, was born in fire and blood. Founded by Maharaja Sawai Jai Singh II in 1727, the city stood as a bastion of Rajput strength, its warriors unyielding against invaders. The mighty walls of Amer Fort have seen countless battles, where Rajput blades clashed against the steel of Mughals and Marathas alike. In 1761, at the brutal Third Battle of Panipat, Jaipur's warriors fought fearlessly, their swords flashing under the sun as they held their ground in one of the bloodiest confrontations in history. Through cunning alliances and sheer will, Jaipur's kings kept the city unconquered, their resolve unbroken even in the face of British dominance. Jaipur's legacy is not just of rulers and kings, but of warriors who never surrendered, their blood and honor woven into the very stones of the city they defended with pride.",
            artH: "The art history of Jaipur is a vibrant tapestry of royal patronage, intricate craftsmanship, and cultural fusion that has left an indelible mark on Indian art. From its inception, Jaipur became a melting pot of artistic traditions, blending Rajput, Mughal, and Persian influences. The city is renowned for its miniature paintings, which burst with vivid colors and intricate detail, often depicting scenes from Hindu epics, royal life, and nature. Jaipur's architecture is another shining jewel in its artistic legacy. The city's iconic pink-hued buildings are a testament to the Maharaja's vision of harmony and grandeur. The Hawa Mahal, with its hundreds of delicate jharokhas (windows), stands as a breathtaking fusion of beauty and functionality, allowing royal ladies to observe street festivities while remaining unseen. Then there's the Amer Fort, where opulence reaches its peak in the Sheesh Mahal—a palace room entirely inlaid with tiny mirrors, shimmering like a night sky filled with stars. Beyond palaces, Jaipur is famed for its handicrafts. The city's artisans perfected the art of blue pottery. Block printing, another craft that flourished here, brought vibrancy to textiles, with rich motifs of elephants, flowers, and birds, leaving their imprints on fabrics that traveled across the world. Jaipur's jewelry art is no less mesmerizing. The city is known for kundan and meenakari work, where gold is intricately shaped and set with uncut gems, and enamel is used to create colorful patterns on the reverse. Jaipur's art history is a living, breathing testament to the creativity and spirit of its people, where every street, every palace, and every piece of art tells an exciting story of a city that thrives at the intersection of tradition and innovation.",
            etymology: "The name 'Jaipur' carries with it a rich tapestry of meaning, woven from the threads of victory and ambition. Originating from the Hindi language, it breaks down into two powerful components: Jai (जय): This word translates to 'victory,' embodying triumph and success. It reflects a sense of achievement, often evoking the glorious conquests and heroic deeds of those who came before. Pur (पुर): Meaning 'city' or 'town,' this suffix is a hallmark of many Indian place names, signaling a vibrant urban settlement filled with life, culture, and history. Together, Jaipur emerges as the 'City of Victory,' a name that resonates with the pride and aspirations of its founder, Maharaja Sawai Jai Singh II. Established in 1727, this city was envisioned as a beacon of progress and prosperity in the arid landscape of Rajasthan. Jaipur's very name encapsulates the spirit of its past—a celebration of triumphs and a homage to its royal heritage."
        },
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        },
        state: "Rajasthan",
        croute: "jaipur",
        GnL: [
            "In the heart of Jaipur, beneath the vibrant hues of the Pink City, lies a chilling legend that sends shivers down the spine of those who dare to whisper its name. The story unfolds in the shadowy corridors of Bhangarh Fort, a mere stone's throw from Jaipur, notorious for being one of the most haunted places in India.",
            "Once a flourishing kingdom, Bhangarh was ruled by a brave king named Raja Madho Singh, a sibling of the founder of Jaipur. The legend goes that the king's enchanting daughter, Ratnavati, was the object of desire for a dark sorcerer named Singhia. Consumed by obsession, Singhia used black magic to ensnare her heart. However, Ratnavati, wise beyond her years, saw through his deceit. She turned the spell against him, causing his demise. As his dying breath echoed through the fort, he cursed the land: 'When the fort falls to ruin, may all who dwell within perish.'",
            "From that day forth, the vibrant life of Bhangarh dwindled into an eerie silence. The fort, once bustling with laughter and festivities, became a hollow shell haunted by restless spirits. Locals whisper tales of strange shadows flitting through the ruins at night, echoing cries of despair, and the unsettling feeling of being watched by unseen eyes.",
            "Even today, daring souls who venture into the fort after sunset often report chilling experiences—disembodied voices, sudden drops in temperature, and a sense of foreboding that seeps into their bones. It is said that the spirits of Ratnavati and her suitor roam the desolate corridors, eternally trapped in their tragic tale, their love forever out of reach, and their souls forever entwined in a sorrowful dance of fate.",
            "So, as the sun sets over Jaipur, casting long shadows on the ancient stones of Bhangarh, one cannot help but feel the weight of its haunting past, a chilling reminder that some legends are better left undisturbed."
        ],
        speciality: [
            "Jaipur is not just about its architectural grandeur; it's also a haven for artisans and craftsmen. The city is renowned for its vibrant handicrafts, from stunning block-printed textiles to intricately carved wooden artifacts, all exuding the soul of Rajasthan. Jewelry lovers will find themselves mesmerized by the exquisite kundan and meenakari pieces that reflect the city's artistic legacy. As you stroll through bustling markets like Johari Bazaar and Bapu Bazaar, the colors, textures, and aromas will sweep you into a whirlwind of sensory delight.",
            
            "Culinary adventures await as well, with Jaipur's streets alive with the tantalizing aromas of pyaaz kachori, dal baati churma, and refreshing lassi. Each dish tells a story of tradition and flavor, making every meal an unforgettable experience. Cultural festivities, such as the exuberant Teej Festival and the internationally acclaimed Jaipur Literature Festival, showcase the city's lively spirit and its commitment to celebrating art and literature.",
            
            "With its distinctive pink-hued buildings, Jaipur stands out as a city that marries history with modern vibrancy, making it an irresistible destination where every corner reveals a new layer of its fascinating narrative. Whether you're wandering through its royal palaces, savoring its delectable cuisine, or immersing yourself in its artistic heritage, Jaipur promises an exhilarating adventure that lingers long after you've left."
        ],
    },
        
    {
        name: "Udaipur",
        description: "Udaipur, often called the 'City of Lakes,' is a shimmering jewel in Rajasthan's crown. Known for its picturesque lakes and majestic palaces, the city has an enchanting romantic charm that captivates travelers. The stunning Lake Pichola, with the floating Lake Palace at its center, and the grand City Palace along its shores, set against the backdrop of the Aravalli hills, make Udaipur a dream destination for history lovers and honeymooners alike.",
        route: "rajasthan",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1503324280674-993a91611f08?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1515005034681-25fc53af9b8b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1546820369-58768d2d1a1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Udaipur, founded in 1559 by Maharana Udai Singh II, was born from the ashes of Chittorgarh's fall to the Mughal emperor Akbar. Udaipur became the new capital of Mewar, a kingdom fiercely resistant to Mughal domination. The city's strategic location in the Aravalli hills gave it a natural defense, and the mighty City Palace served as both a symbol of royal strength and a fortress of resistance. Maharana Pratap, one of the most revered figures in Rajput history, waged relentless guerrilla warfare from the hills of Udaipur against the Mughals. The famous Battle of Haldighati in 1576, although a technical defeat for Mewar, became a rallying cry of Rajput pride and valor. Throughout centuries of battles and political maneuvering, Udaipur remained unconquered, preserving its legacy of bravery and defiance.",
            artH: "Udaipur's art history is a stunning reflection of the city's royal grandeur and natural beauty. The miniature paintings of Udaipur are famous for their fine details, vivid colors, and depictions of court life, religious subjects, and the beauty of nature. The intricate frescoes adorning the walls of the City Palace and Jagmandir Island Palace showcase a deep commitment to artistry, where every brushstroke tells the story of Udaipur's regal past. The city is also renowned for its Pichwai paintings, which depict scenes from the life of Lord Krishna, often in vibrant hues of blue and gold. Udaipur's palaces and havelis are architectural marvels, blending Rajput and Mughal styles. The use of marble, mirror work, and elaborate jali (lattice) windows adds to the city's ethereal beauty. Beyond paintings and architecture, Udaipur is home to skilled artisans crafting jewelry, pottery, and textiles, preserving the ancient art forms passed down through generations.",
            etymology: "The name 'Udaipur' derives from the city's founder, Maharana Udai Singh II. 'Udaipur' combines the name 'Udai,' meaning 'rise' or 'ascend,' with 'pur,' meaning 'city' in Hindi. Together, the name symbolizes the city as a place of ascension, where the new capital of the Mewar kingdom rose from the depths of Chittorgarh's destruction, emerging as a beacon of hope and resistance. It reflects the resilient spirit of Udaipur's people, who rebuilt their kingdom on the shores of its tranquil lakes, defying both nature and invaders."
        },
        geometry: {
            type: "Point",
            coordinates: [73.6833, 24.5854]
        },
        state: "Rajasthan",
        croute: "udaipur",
        GnL: [
            "Not far from Udaipur, hidden among the hills, lies the abandoned **Chandani Village**, a place no one dares to visit after dark. Many years ago, the village was cursed by a dark sorcerer who came to the village, promising wealth and prosperity. Desperate for a better life, the villagers accepted him, not knowing they had invited evil into their midst.",
            
            "The sorcerer practiced dark magic, using the villagers for sinister rituals. One night, he tried to summon a powerful spirit but something went horribly wrong. The spirit, angry at being disturbed, unleashed its fury on the village. Screams filled the night as one by one, the villagers were killed in gruesome ways. By morning, the village was silent, with only one survivor—a young woman named Chandani. But she was no longer herself. Haunted and broken, she wandered to the village well and, with her last breath, cursed the land before disappearing into the dark waters.",
            
            "Since that night, Chandani Village has remained deserted. Those who have dared to visit speak of strange, terrifying occurrences. As the sun sets, the village becomes unnaturally cold. People have seen figures moving in the shadows, whispering voices that seem to come from nowhere, and the well itself is said to glow under the moonlight. Locals say that Chandani's spirit, along with the angry spirit the sorcerer summoned, still haunts the village, waiting for anyone foolish enough to enter.",
            
            "Some who ventured too close have never returned. Others speak of a terrifying feeling of being watched, followed by nightmares that won't stop. They say if you hear someone calling your name in Chandani, do not answer, or the curse will follow you home, and no one escapes its grip."
        ],        
        speciality: [
            "Udaipur is famed for its exquisite craftsmanship, with artisans excelling in miniature paintings, marble sculptures, and intricate silverware. The city's rich tradition of textile art, including the famous bandhani (tie-dye) and block printing, reflects centuries of artistic evolution. Wander through the vibrant bazaars, and you'll find yourself surrounded by colorful tapestries, handmade leather journals, and the glint of meticulously crafted jewelry.",
            
            "Udaipur's culinary scene is equally delightful, offering an array of traditional Rajasthani flavors. From the tangy gatte ki sabzi to the rich and creamy lal maas, Udaipur's cuisine is a feast for the senses. Don't miss the famous Udaipur thali, a lavish meal that showcases the city's diverse flavors and cooking techniques. For those with a sweet tooth, the mouthwatering ghewar and malpua are a must-try.",
            
            "Udaipur's charm lies in its ability to blend old-world splendor with modern amenities. Whether you're sailing on the serene waters of its lakes, exploring the grand City Palace, or simply enjoying a sunset over the Aravalli hills, Udaipur offers an experience that resonates deeply with all who visit. It is a city where art, culture, and history converge, creating a magical atmosphere that lingers in your memory long after your journey ends."
        ],
    }
    
    ,
    {
        name: "Jodhpur",
        description: "Jodhpur, often called the 'Blue City,' captivates visitors with its stunning blue-washed buildings and the towering Mehrangarh Fort. This desert city stands as a reminder of Rajasthan's royal heritage, where history, culture, and architectural splendor come together. The streets of Jodhpur bustle with vibrant life, yet around every corner, ancient tales and legends await discovery.",
        route: "rajasthan",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1706961121783-4ae6c933983a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Jodhpur, founded in 1459 by Rao Jodha, is a city forged in the fires of battle. Its mighty Mehrangarh Fort, rising above the desert plains, has witnessed countless conflicts, from Rajput skirmishes to Maratha invasions. The fort's walls, built to withstand even the fiercest attacks, hold the echoes of past wars, where the valor of Jodhpur's warriors remains legendary. Through alliances and war, the city remained a powerful Rajput stronghold, a symbol of resilience in the face of invaders.",
            artH: "Jodhpur's artistic heritage is as rich as its royal history. The city is known for its fine craftsmanship, particularly in textiles and metalwork. The intricate 'bandhani' tie-dye fabric and luxurious 'zari' embroidery have long been prized by royalty. Jodhpur's palaces and havelis showcase the best of Rajasthani architecture, blending Mughal and Rajput styles. From the grand Umaid Bhawan Palace to the exquisite carvings of the Jaswant Thada, Jodhpur stands as a city where art and architecture tell the story of a glorious past.",
            etymology: "The name 'Jodhpur' is derived from its founder, Rao Jodha, a warrior king who built the city in 1459. 'Pur' means 'city' or 'town' in Hindi, thus Jodhpur simply translates to 'Jodha's City,' marking it as a testament to the power and vision of its founder. Rao Jodha chose this location due to its strategic position in the desert, where the towering Mehrangarh Fort would watch over and protect his people."
        },
        geometry: {
            type: "Point",
            coordinates: [73.0243, 26.2389]
        },
        state: "Rajasthan",
        croute: "jodhpur",
        GnL: [
            "Deep in the Thar Desert, near Jodhpur, lies the forgotten **Kuldhara Village**, where an unsettling mystery haunts the sands. Centuries ago, this village was home to the prosperous Paliwal Brahmins, known for their wealth and peace. But one dark night, the entire population vanished without a trace, leaving behind only empty homes and chilling silence.",
            
            "The legend goes that the village was cursed by a ruthless minister named Salim Singh, who lusted after the village chief's daughter. He threatened to destroy the village if she didn't marry him. Fearing for their lives but unwilling to surrender to his evil desires, the villagers made a pact. On a moonless night, they gathered their belongings and disappeared into the desert forever. But before leaving, they cursed the land so that no one could ever live there again.",
            
            "Since that night, Kuldhara has remained abandoned, and anyone who tries to stay overnight is plagued by strange, horrifying events. People report hearing eerie whispers carried by the desert winds, footsteps echoing in the empty streets, and strange figures appearing and disappearing in the shadows. Some say they have seen the ghost of the chief's daughter, still roaming the village, her tragic fate never forgotten. Others speak of a feeling of dread that seeps into your bones, as if the desert itself remembers the night of the curse.",
            
            "To this day, Kuldhara remains desolate, a chilling reminder of a curse that even time could not break."
        ],
        speciality: [
            "Jodhpur is famous for its vibrant blue-painted houses, a tradition said to keep the homes cool in the scorching desert heat. As you explore the narrow, winding streets of the old city, you'll be captivated by the stunning contrast between the blue houses and the golden Mehrangarh Fort looming above.",
            
            "The city is also renowned for its craftsmanship, particularly in textiles, leather goods, and furniture. Jodhpur's markets, like the bustling Sardar Market, are filled with handmade items that reflect the city's artistic heritage. From finely crafted juttis (traditional footwear) to vibrant 'bandhani' textiles, Jodhpur's artisans keep the traditions of their ancestors alive.",
            
            "No visit to Jodhpur is complete without savoring the local cuisine. The city's street food scene is legendary, offering delicacies like mirchi vada (spicy chili fritters) and mawa kachori (a sweet pastry filled with dried fruits). Jodhpur is also known for its savory snacks, particularly the crispy, fried namkeens that make for the perfect travel companion. For those with a sweet tooth, the rich flavors of ghevar and ladoos will leave a lasting impression."
        ]
    }
    
    ,
    // Uttar Pradesh Cities
    {
        name: "Lucknow",
        description: "Lucknow, the City of Nawabs, is famous for its refined culture, rich history, and architectural marvels. Known for its grand Mughal-inspired buildings, bustling bazaars, and lip-smacking Awadhi cuisine, Lucknow blends the old and the new with a charm that captivates every visitor. The city's ornate gardens, historical landmarks like the Bara Imambara, and courteous hospitality make it a unique destination.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1585151072585-cdf5ef8b4449?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1575555304397-0e15ffb6fcb1?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1578336696531-842269ee480f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Lucknow has witnessed fierce battles, especially during the 1857 Indian Rebellion. The city became a battleground where Indian freedom fighters and British forces clashed in brutal confrontations. The famous Siege of Lucknow saw months of bloody warfare, with the Residency building standing as a symbol of the resilience and determination of those who defended the city. Even after the British reclaimed control, the stories of courage and sacrifice during this time are forever etched in the city's memory.",
            artH: "Lucknow's artistic heritage is deeply rooted in the Mughal era, with a focus on dance, music, and poetry. The city is famed for its Kathak dance and its association with Urdu poetry and ghazals. Nawabi architecture, such as the Bara Imambara and the Chota Imambara, showcases the city's unique style, blending Persian, Mughal, and Indian elements. The city's traditional crafts, such as chikan (delicate hand embroidery) and zardozi (gold thread embroidery), remain prized throughout India.",
            etymology: "The name 'Lucknow' is believed to derive from 'Lakshmanavati,' named after Lakshman, the brother of Lord Rama in Hindu mythology. Over time, Lakshmanavati became Lakhanavati, then Lucknow. The city's name reflects its ancient roots and its place in Indian mythological and historical traditions."
        },
        geometry: {
            type: "Point",
            coordinates: [80.9462, 26.8467]
        },
        state: "Uttar Pradesh",
        croute: "lucknow",
        GnL: [
            "In the heart of Lucknow, the **Oudh Begums' Palace**, once a symbol of beauty and grandeur, holds a darker secret beneath its ruins. Once, the palace was home to a powerful Begum whose beauty was said to cast a spell on all who saw her. However, her lust for power knew no bounds, and she used dark magic to prolong her youth and rule.",
            
            "One fateful night, the Begum performed a ritual to summon the spirits of the dead, seeking to drain their energy. But something went wrong, and instead of granting her more power, the spirits turned against her. Her screams echoed through the palace, but no one dared to help her. When the sun rose, the palace was silent, the Begum vanished, and her once-grand chambers were filled with a chilling cold.",
            
            "Even today, locals say that if you pass by the ruins late at night, you can hear the faint whispers of the Begum's voice calling out, trying to lure those who listen into the palace's haunted depths. Shadowy figures are said to roam the halls, and anyone who stays after sunset feels an overwhelming presence watching their every move. Those brave enough to venture inside never return the same, haunted by visions of the cursed Begum and her tormented spirits."
        ],
        speciality: [
            "Lucknow is synonymous with Awadhi cuisine, a royal culinary tradition known for its kebabs, biryanis, and slow-cooked dishes. The city's famous Tunday Kababi is a must-visit for anyone who wants to taste its legendary galouti kebabs, while the aroma of Lucknow's biryanis fills the air of its old markets.",
            
            "The city is also famed for its delicate chikan embroidery, an intricate craft that creates beautiful patterns on fabric. As you stroll through the streets of Hazratganj or Aminabad, you'll find shops brimming with chikan garments, a reflection of the city's artistic soul.",
            
            "Lucknow's cultural life is rich with poetry, music, and dance. The city is known for its traditional ghazals and Kathak performances, both of which tell the stories of love, war, and devotion that echo through its streets and palaces."
        ]
    },
    {
        name: "Varanasi",
        description: "Varanasi, also known as Kashi or Benares, is a mesmerizing city that transcends time, where the sacred Ganges River flows like a lifeline, nurturing the soul of India. With a history that stretches back over 3,000 years, Varanasi is often regarded as the spiritual capital of the country. Here, the ghats are more than mere steps leading to the river; they are vibrant stages for life, death, and everything in between. As dawn breaks, the ghats are bathed in golden sunlight, revealing a tapestry of colors, sounds, and aromas that envelop you like a warm embrace. The air is thick with the fragrance of sandalwood, jasmine, and the rich spices of local cuisine. As you walk through the narrow, winding streets, the sounds of temple bells, chanting mantras, and the lively banter of shopkeepers create a symphony that resonates with the heartbeat of the city. Varanasi invites you to explore its ancient temples, witness the mesmerizing Ganga Aarti, and immerse yourself in the profound spirituality that seeps into every corner.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1578916232773-4aefc3a1d5af?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1543906480-b02f537d68ee?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1578720261635-491df9e7bb60?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Varanasi has long been a sacred stronghold, its spiritual significance drawing countless rulers and warriors to its banks over the centuries. As the city flourished under the aegis of various dynasties, it witnessed numerous conflicts, each echoing with the cries of valor and sacrifice. The Mughal Empire, under the reign of Akbar, sought to dominate this vital cultural and religious center, leading to fierce skirmishes with local kings who were determined to protect their sacred land. The famed Raja Man Singh, a general in Akbar's court and a loyal ally of the Mughal emperor, fought to maintain a delicate balance between faith and power, often finding himself at the crossroads of loyalty and duty.One particularly intense conflict arose in the 18th century, when the Marathas, seeking to expand their influence, clashed with the Nawabs of Awadh for control over Varanasi. This battle was not just about territory; it was a struggle for the heart and soul of a city revered by Hindus and Muslims alike. The turbulent streets of Varanasi became the backdrop for heroic tales of warriors who fought valiantly to protect their beliefs and way of life. The legacy of these battles lives on in the city's temples and ghats, where the spirits of those who fell in combat are said to linger, eternally tied to the sacred soil they defended. Moreover, the city played a pivotal role during the First War of Indian Independence in 1857, as local revolutionaries rose against British rule. The people of Varanasi rallied together, inspired by the hope of reclaiming their sovereignty. The indomitable spirit of the citizens, who took up arms and faced British forces with unwavering courage, is etched into the annals of history. The echoes of their struggles resonate through the lanes and ghats of Varanasi, reminding visitors of a past filled with resilience, pride, and the eternal quest for freedom.",
            artH: "Varanasi, a city that pulsates with artistic vibrancy, boasts a rich tapestry of art history that is both diverse and profound. From its inception, Varanasi has been a beacon of cultural exchange, where traditions from different regions converge and intertwine. The art of Varanasi is heavily influenced by its spiritual heritage, with numerous artists drawing inspiration from the ancient texts, religious motifs, and the essence of life along the sacred Ganges River.\n\nMiniature paintings from Varanasi are particularly noteworthy, often depicting scenes from Hindu epics, showcasing the city's devotion to spirituality and artistry. Local artisans have perfected the art of crafting intricate woodwork, pottery, and textiles, each piece telling a story that reflects the city's cultural depth.\n\nMoreover, Varanasi is renowned for its handwoven silk, specifically the famous Banarasi silk sarees, which are adorned with intricate zari work and vibrant patterns. This craft has been passed down through generations, embodying the rich heritage of the city. \n\nThe architecture of Varanasi also speaks volumes about its artistic legacy. The ghats, with their ancient steps leading to the Ganges, are a breathtaking sight, adorned with temples and shrines that showcase exquisite stone carvings. Each structure holds a significance that resonates with the city's spiritual ethos. \n\nAdditionally, the city has long been a hub for performing arts, including classical music and dance forms, which have thrived in its vibrant cultural milieu. The annual Ganga Mahotsav, for instance, is a celebration of the arts, where music, dance, and drama come alive, showcasing the creative spirit of Varanasi.\n\nOverall, the art history of Varanasi is a living testament to the city's enduring legacy, where creativity and spirituality coalesce to create a vibrant cultural landscape that continues to inspire artists and visitors alike.",
            etymology: "The name 'Varanasi' is deeply rooted in its geography, derived from the two rivers that flow through the city: Varuna and Assi. Symbolizing purity and the convergence of sacred waters, the name embodies the essence of spiritual awakening. Often referred to as the 'City of Light,' Varanasi represents enlightenment and knowledge, drawing seekers from all walks of life to its ancient shores. The city's history and etymology speak to its significance as a beacon of hope, where the light of understanding shines brightly amidst the shadows of life."
        },
        geometry: {
            type: "Point",
            coordinates: [82.9560, 25.3176]
        },
        state: "Uttar Pradesh",
        croute: "varanasi",
        GnL: [
            "In the labyrinthine alleys of Varanasi, where shadows dance and whispers linger, a chilling tale awaits those brave enough to explore after dark. Legend speaks of the spirits that roam the ghats, particularly near the **Manikarnika Ghat**, known as the burning ghat. It is said that those who wander too close at midnight may hear the soft cries of the departed, echoing through the night air, as if the very souls of the deceased are seeking solace.",
            
            "One spine-tingling story recounts a lost traveler, entranced by the flickering lamps and fragrant offerings. As he approached the ghat, a sudden chill enveloped him, and he felt a cold hand grip his shoulder. Turning around, he encountered a ghostly figure, a sorrowful spirit trapped between worlds, unable to move on. Locals believe that those who encounter this lost soul are forever haunted, their dreams filled with visions of the past and a sense of unfinished business.",
            
            "Folk wisdom advises against visiting the ghats alone at night, for the spirits of those who have left this realm linger, searching for the living. As you walk along the dimly lit pathways, an eerie feeling washes over you, as if unseen eyes are watching, reminding you that Varanasi is a city where life and death intertwine, creating a profound connection that transcends the boundaries of existence."
        ],
        speciality: [
            "Varanasi is not just a city; it's a sensory experience that immerses you in its rich culture and spirituality. One of the city's crowning jewels is the **Kashi Vishwanath Temple**, a sacred site dedicated to Lord Shiva, drawing millions of pilgrims each year. The temple's intricate architecture and spiritual significance make it a must-visit for anyone seeking to understand the essence of Varanasi.\n",
            
            "The streets of Varanasi are alive with the vibrant hustle and bustle of local markets. Here, you can find exquisite **Banarasi silk sarees**, known for their intricate designs and luxurious feel, making them a symbol of Indian heritage. The artisans of Varanasi have honed their craft for centuries, creating textiles that are as much a work of art as they are clothing.\n",
            
            "Culinary delights await at every corner, with street vendors serving up mouthwatering local dishes like **kachaudi**, **chaat**, and the famous **lassi**. Each bite transports you deeper into the heart of Varanasi's culinary traditions, rich with flavors and stories.\n",
            
            "As you walk along the ghats, the aroma of incense and the sounds of chanting fill the air, offering a glimpse into the city's spiritual life. The nightly **Ganga Aarti**, a mesmerizing ritual performed at the banks of the Ganges, illuminates the darkness with flickering diyas (lamps), creating a surreal atmosphere that captivates all who witness it.\n",
            
            "Cultural festivities, such as the **Dev Deepawali** and **Ganga Mahotsav**, showcase Varanasi's lively spirit and deep-rooted traditions, attracting visitors from all over the world to partake in the celebrations. Whether you're exploring ancient temples, indulging in local delicacies, or simply absorbing the vibrant atmosphere, Varanasi promises an unforgettable journey that resonates long after you've left."
        ]
        
    }
    
    ,
    {
        name: "Agra",
        description: "Agra, home to the magnificent Taj Mahal, is a city steeped in rich history and romance. This UNESCO World Heritage Site draws millions of visitors with its stunning Mughal architecture, vibrant bazaars, and delicious Mughlai cuisine. Beyond the Taj Mahal, Agra offers historical gems like the Agra Fort and the Tomb of Itimad-ud-Daulah, each telling tales of love, power, and grandeur.",
        route: "up",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1544462576-3a3041d6b8b9?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1571975169735-fb6e99ab58e8?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1580338256722-1b85e57d98da?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Agra has been a significant historical site since the Mughal era, often witnessing battles for power and control. The Mughal emperors built monumental structures, but the city also saw fierce struggles, particularly during the invasions by the Marathas and later the British. Each conflict has left a mark on Agra's identity, blending history with the tales of bravery and sacrifice.",
            artH: "Agra's artistic heritage is reflected in its magnificent architecture and intricate craftsmanship. The city is renowned for its marble inlay work, famously seen in the Taj Mahal. The Mughal influence can be seen in its art, which combines Persian and Indian styles. Agra's artisans are celebrated for their skills in crafting exquisite jewelry, textiles, and pottery, embodying the city's rich artistic traditions.",
            etymology: "The name 'Agra' is believed to have been derived from the Sanskrit word 'Agravana,' meaning 'the place at the edge.' It signifies Agra's position as a significant urban center, strategically located along trade routes. The name captures the essence of Agra's role as a thriving hub in Indian history."
        },
        geometry: {
            type: "Point",
            coordinates: [78.0081, 27.1767]
        },
        state: "Uttar Pradesh",
        croute: "agra",
        GnL: [
            "Agra's most haunting tale revolves around the **Taj Mahal**, a symbol of eternal love, yet it carries a dark secret. Legend has it that after the death of Mumtaz Mahal, Shah Jahan, her grieving husband, became obsessed with creating the perfect mausoleum for her. But as the Taj Mahal neared completion, Shah Jahan's power began to wane, and a bloody betrayal unfolded.",
            
            "His own son, Aurangzeb, imprisoned Shah Jahan in the Agra Fort, where he could only gaze at the Taj Mahal from afar. It is said that in his sorrow, the ghost of Shah Jahan wanders the fort at night, weeping for his lost love, while the spectral figure of Mumtaz Mahal roams the gardens of the Taj, forever waiting for her beloved.",
            
            "Visitors who linger too long near the Taj after sunset sometimes report hearing soft whispers and gentle cries carried by the night breeze. Those who venture into the gardens at night claim to feel an unshakeable chill and the presence of unseen eyes watching them, as if the spirits of the star-crossed lovers are eternally trapped in their tale of love and loss, longing for each other yet forever separated by fate."
        ],
        speciality: [
            "Agra is famous for its Mughlai cuisine, with rich, aromatic dishes like biryani, kebabs, and pethas (a sweet made from ash gourd). The flavors and spices reflect the city's royal heritage, offering a taste of history with every bite.",
            
            "The city is also renowned for its intricate marble inlay work, known as *pietra dura*, which can be seen in the Taj Mahal and other monuments. Artisans create stunning designs using semi-precious stones, a tradition that continues to thrive in Agra.",
            
            "Shopping in Agra is an experience in itself. The local bazaars are filled with beautiful handicrafts, textiles, and souvenirs. From exquisite carpets to handcrafted jewelry, visitors can find treasures that capture the essence of Agra's rich culture."
        ]
    },    
  
 
    

    // Maharashtra Cities
    {
        name: "Mumbai",
        description: "Mumbai, the bustling heart of India, pulsates with life and energy. Known as the city of dreams, it offers a thrilling mix of glamour, culture, and history. From the iconic Gateway of India to the vibrant streets of Colaba, every corner of this metropolis is a story waiting to unfold.",
        route: "maharashtra",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1559309259-e30e5e7b9b9d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1579501533641-1834f4255a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1582719402587-bb67b593b132?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Mumbai's strategic location has made it a battleground of historic conflicts. In the 17th century, the city was fiercely contested by the Marathas and the Portuguese, each eager to control the lucrative port. Chhatrapati Shivaji Maharaj, the Maratha king, and the Portuguese fought several battles, leaving behind tales of courage and conflict. The British East India Company later seized control of Mumbai, further entangling the city in colonial struggles. The **Battle of Mumbai**, fought during the Indian Rebellion of 1857, saw intense fighting as the city played a key role in the resistance against British rule. The echoes of these battles resonate in Mumbai's streets, a city that has withstood centuries of conflict and emerged as a symbol of resilience.",
            artH: "Mumbai's art history is a dynamic blend of traditional and contemporary influences. The city's artistic evolution began with the rich heritage of Indian classical art forms and was significantly shaped by the colonial era, which introduced new styles and techniques. The **Kala Ghoda Art Precinct** stands as a testament to Mumbai's artistic vibrancy, where galleries like the **Jehangir Art Gallery** and the **National Gallery of Modern Art** exhibit a range of artistic expressions from modern masterpieces to traditional crafts. Bollywood, Mumbai's film industry, is a global phenomenon, influencing not only Indian cinema but also international film narratives. The city's art scene is continuously evolving, with new galleries and cultural festivals celebrating both established and emerging artists.",
            etymology: "The name 'Mumbai' is derived from 'Mumbā,' the local deity of the city, and 'Aai,' meaning mother in Marathi. The city was formerly known as Bombay, a name believed to have originated from the Portuguese phrase 'Bom Bahia,' meaning 'Good Bay.' However, in 1995, the name was officially changed to Mumbai to honor the city's heritage and its deep-rooted cultural significance."
        },
        geometry: {
            type: "Point",
            coordinates: [72.8777, 19.0760]
        },
        state: "Maharashtra",
        croute: "mumbai",
        GnL: [
            "In the heart of Mumbai, the **Aarey Colony** stands as a haunting reminder of the city's past. Once a verdant sanctuary, it now reverberates with ghostly echoes of the tribal communities displaced during urban expansion. Locals whisper of spectral figures seen between the trees and eerie sounds of distant wails that pierce the silence of the night. The atmosphere is thick with an otherworldly presence, making it a place where the veil between past and present seems hauntingly thin.",
            "The **Tower of Silence** in Malabar Hill is another site steeped in eerie lore. This Zoroastrian burial ground, where the deceased are exposed to the elements, is said to be guarded by spirits. The chilling silence of the tower, interrupted only by the mournful cawing of crows, adds to the unsettling ambiance. Visitors report a pervasive sense of being watched, and the air seems charged with an ancient, spectral energy, making it a place where the past feels palpably present."
        ],
        speciality: [
            "Mumbai is a city that never sleeps, and its nightlife is nothing short of legendary. From glitzy nightclubs to serene beachside shacks, the city offers something for every night owl. The local street food scene, especially in areas like **Chaat Gali** and **Mohammad Ali Road**, tantalizes taste buds with spicy pav bhaji, crispy vada pav, and sweet panchakarma, making every evening a culinary adventure.\n",
            
            "Art lovers will find themselves captivated by the **Jehangir Art Gallery**, showcasing stunning works from local artists, while the **National Gallery of Modern Art** offers a glimpse into contemporary expressions. The rich tapestry of Mumbai's art scene is alive with creativity and inspiration.\n",
            
            "For those seeking spirituality, **Siddhivinayak Temple** is a must-visit, where thousands flock daily to seek blessings from Lord Ganesha. The temple's vibrant atmosphere is infused with devotion, making it an unforgettable experience.\n",
            
            "Mumbai's diverse neighborhoods each tell a unique story, from the charming lanes of **Bandra** to the historic **Fort** area, where colonial architecture stands as a testament to the city's rich history. Exploring these areas offers a captivating glimpse into the vibrant life of this metropolis."
        ]
    }    ,
    {
        name: "Pune",
        description: "Pune, often referred to as the 'Oxford of the East,' is a vibrant city that beautifully merges tradition with modernity. Known for its rich cultural heritage, educational institutions, and lively atmosphere, Pune is a hub of innovation and creativity. From the majestic forts that whisper tales of bravery to the bustling markets filled with local delights, Pune promises an adventure at every turn.",
        route: "maharashtra",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1600848231066-1eb3b55cf8ec?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Pune's history is steeped in the valor of the Marathas. The city was once the seat of the Peshwas, the prime ministers of the Maratha Empire. It became a center of military strategy and planning, especially during the Anglo-Maratha Wars. The **Battle of Sinhagad**, fought in 1670, is one of the most significant events in Pune's history, where the legendary Tanaji Malusare fought bravely to reclaim the fort from the Mughals. His daring exploits have become a part of local folklore, symbolizing bravery and loyalty. Even today, the echoes of these historical battles resonate through the city's forts, monuments, and cultural practices, reflecting a legacy of courage and resistance.",
            artH: "Pune is a cultural oasis, home to a diverse array of artistic expressions. The city hosts numerous art galleries, theaters, and music festivals, making it a vibrant hub for creatives. The **Raja Dinkar Kelkar Museum** showcases an exquisite collection of artifacts that tell the story of Indian craftsmanship through the ages. Pune's theater scene thrives with the famous **Shivaji Mandir**, which hosts various plays, including traditional Marathi dramas. The **Sawai Gandharva Bhimsen Mahotsav**, an annual music festival, attracts renowned artists and music lovers, celebrating the rich musical heritage of India. The city's commitment to the arts is further exemplified by its numerous educational institutions, fostering a spirit of creativity and innovation.",
            etymology: "The name 'Pune' is believed to be derived from the Sanskrit word 'Punyanagari,' meaning 'the city of virtue.' Another theory suggests that it comes from the name of the goddess **Punya**, revered in the region. Historically, Pune has been known by various names, including 'Punya Vishweshwar,' in honor of the revered temple dedicated to Lord Shiva in the city."
        },
        geometry: {
            type: "Point",
            coordinates: [73.8567, 18.5196]
        },
        state: "Maharashtra",
        croute: "pune",
        GnL: [
            "Pune is home to the chilling legend of **Shaniwar Wada**, a grand fort that echoes with the whispers of the past. Built in 1730, this historical fort was the seat of the Peshwas, and it is said to be haunted by the spirit of a young prince who met a tragic fate. Visitors claim to hear cries for help at night, and many have felt an unexplained chill as they wander through its ancient corridors, especially during the full moon when the fort's silhouette casts an eerie shadow against the night sky.",
            "The eerie tale of **The Ghost of the Old Aundh Fort** also captivates locals and visitors alike. This abandoned fort, located on the outskirts of Pune, is said to be haunted by the spirit of a soldier who lost his life during a battle. People who have dared to explore the fort report feeling an unsettling presence, with sudden drops in temperature and inexplicable sensations of being watched. The chilling atmosphere of the fort, surrounded by dense foliage, adds to its ghostly allure."
        ],
        speciality: [
            "Pune's culinary scene is a delightful journey for food lovers. From the iconic **Vada Pav** at local street stalls to the delectable **Misal Pav**, the city offers a rich tapestry of flavors. The bustling streets of **Fergusson College Road** come alive in the evenings, filled with vendors serving up spicy snacks and refreshing beverages that keep the energy buzzing throughout the night.\n",
            
            "The city's thriving café culture is another highlight, with charming establishments like **Vohuman Café** and **German Bakery** offering a cozy atmosphere to savor a cup of freshly brewed coffee and delightful pastries. Pune is also famous for its craft beer scene, with microbreweries like **Doolally Taproom** and **The Beer Café** inviting patrons to relax and unwind.\n",
            
            "Pune's cultural landscape is enriched by its numerous festivals, including the vibrant **Ganesh Chaturthi**, where the city transforms into a sea of colors and festivities, attracting visitors from all over. The **Pune International Film Festival** showcases a diverse range of cinematic talent, making it a must-visit for film enthusiasts.\n",
            
            "Nature lovers can explore the scenic beauty of **Panchgani** and **Lonavala**, popular hill stations near Pune, offering breathtaking views and tranquil surroundings. The **Khadakwasla Dam** and **Mulshi Lake** are perfect spots for picnics and outdoor activities, providing a refreshing escape from the city's hustle and bustle."
        ]
    },    
    {
        name: "Nagpur",
        description: "Nagpur, the orange city of India, is a bustling metropolis known for its vibrant culture, rich history, and lush green landscapes. Situated in the heart of the country, it serves as a vital trade and transportation hub. With its famous oranges, beautiful parks, and a blend of urban and rural life, Nagpur offers a unique experience that captures the essence of India.",
        route: "maharashtra",
        images: [
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1558591720-cc847c79226d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { filename: "", imgUrl: "https://images.unsplash.com/photo-1579013337739-e0eb8a215a66?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        history: {
            war: "Nagpur has a rich historical tapestry woven with tales of resilience and courage. It was a significant center during the **Maratha Empire**, serving as a strategic point in the conflict against the British East India Company. The **Battle of Nagpur** in 1818 marked the end of Maratha dominance in the region. The city also played a vital role during the **Indian Independence Movement**, serving as a hub for revolutionary activities. Prominent leaders like **Dr. B. R. Ambedkar**, who was born here, contributed to the fight for social justice and equality. The echoes of these struggles still resonate in Nagpur's streets, making it a place of historical significance.",
            artH: "Nagpur is a cultural melting pot, showcasing a blend of art and heritage. The city is home to various art forms, including traditional **Warli painting** and classical music. The **Nagpur Museum**, founded in 1863, displays a rich collection of artifacts that highlight the region's history and culture. Local festivals such as **Gudi Padwa** and **Diwali** see vibrant celebrations filled with traditional music, dance, and art exhibitions, showcasing the city's artistic spirit. The city's commitment to art is evident in initiatives like the **Nehru Arts and Crafts Centre**, where workshops and exhibitions nurture local talent.",
            etymology: "The name 'Nagpur' is derived from the word 'Nag,' which refers to the **serpent**, and 'pur,' meaning 'city' in Hindi. This name is believed to have originated from the presence of a temple dedicated to the snake god, **Nagoba**, near the city. Additionally, Nagpur is famous for its oranges, which have earned it the nickname 'Orange City.'"
        },
        geometry: {
            type: "Point",
            coordinates: [79.0882, 21.1458]
        },
        state: "Maharashtra",
        croute: "nagpur",
        GnL: [
            "One of the most chilling tales in Nagpur is that of the **Seminary Hills**, an area known for its beautiful landscapes and eerie legends. Locals believe that the hills are haunted by the spirits of those who met untimely deaths in the region. Many visitors report feeling a strange presence while hiking, with whispers carried by the wind and shadows darting between the trees. The haunting silence of the hills is often broken by unexplained sounds, sending chills down the spines of those who dare to explore after dark.",
            "Another spine-tingling story is linked to the **Nagpur Central Jail**, which is rumored to be haunted by the spirits of prisoners who lost their lives within its walls. Former inmates and staff have reported eerie occurrences, such as unexplained noises, ghostly figures appearing in the dark, and the feeling of being watched. Many believe that the restless souls of those who faced injustice still linger, making this place a hub of ghostly activity."
        ],
        speciality: [
            "Nagpur is famous for its delicious **Nagpur oranges**, known for their sweetness and juiciness. The city is a major producer of oranges in India, and local markets are filled with vibrant orange hues during the season. Visitors can savor fresh orange juice, and local delicacies like **Orange Barfi**, showcasing the fruit's versatility and flavor.\n",
            
            "The local cuisine is a delightful blend of Maharashtrian and regional flavors. Dishes like **Puran Poli**, **Misal Pav**, and **Bhel Puri** are must-tries, offering a taste of traditional cooking. The bustling **Sadar Market** is a great place to explore street food, where vendors serve a variety of savory snacks that tantalize the taste buds.\n",
            
            "Nagpur's cultural landscape is enriched by its festivals, particularly **Diwali**, which lights up the city with vibrant decorations and celebrations. The **Bhaubeej** festival, celebrating the bond between brothers and sisters, showcases the city's close-knit family values and traditions.\n",
            
            "Nature lovers can enjoy the serene beauty of the **Futala Lake**, a popular spot for picnics and leisurely walks, surrounded by lush greenery. The **Ambazari Lake** is another picturesque location, ideal for boating and enjoying the sunset, offering a perfect escape from the hustle and bustle of city life."
        ]
    }
,    
];


module.exports={data:indianCities};












