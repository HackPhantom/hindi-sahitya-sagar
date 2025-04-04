
export interface Author {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  bio: string;
}

export interface Genre {
  id: string;
  name: string;
  description: string;
}

export interface Book {
  id: string;
  title: string;
  author: Author;
  coverImage: string;
  genres: Genre[];
  publishedYear: number;
  description: string;
  pageCount: number;
  language: string;
  availability: 'available' | 'preview' | 'unavailable';
  featured?: boolean;
  previewContent?: string;
}

// Authors data
export const authors: Author[] = [
  {
    id: '1',
    name: 'प्रेमचंद',
    birthYear: 1880,
    deathYear: 1936,
    bio: 'प्रेमचंद (जुलाई 31, 1880 - अक्टूबर 8, 1936), जिनका असली नाम धनपत राय था, हिंदी और उर्दू के महानतम लेखकों में से एक थे। उन्हें "उपन्यास सम्राट" की उपाधि दी गई थी।'
  },
  {
    id: '2',
    name: 'महादेवी वर्मा',
    birthYear: 1907,
    deathYear: 1987,
    bio: 'महादेवी वर्मा (26 मार्च, 1907 - 11 सितंबर, 1987) हिंदी साहित्य की प्रमुख छायावादी कवयित्री थीं। उन्हें "आधुनिक मीरा" की उपाधि दी गई।'
  },
  {
    id: '3',
    name: 'मोहन राकेश',
    birthYear: 1925,
    deathYear: 1972,
    bio: 'मोहन राकेश (जन्म 8 जनवरी 1925 - मृत्यु 3 दिसंबर 1972) हिंदी साहित्य के प्रसिद्ध नाटककार, कहानीकार और उपन्यासकार थे। वे नई कहानी आंदोलन के अग्रणी लेखकों में से एक थे।'
  },
  {
    id: '4',
    name: 'भीष्म साहनी',
    birthYear: 1915,
    deathYear: 2003,
    bio: 'भीष्म साहनी (1915-2003) हिंदी के प्रसिद्ध लेखक, उपन्यासकार, और अभिनेता थे। उनका उपन्यास "तमस" विभाजन की त्रासदी पर आधारित है और इसका टेलीविजन रूपांतरण भी बहुत लोकप्रिय रहा।'
  },
  {
    id: '5',
    name: 'हरिवंश राय बच्चन',
    birthYear: 1907,
    deathYear: 2003,
    bio: 'हरिवंश राय बच्चन (27 नवंबर, 1907 - 18 जनवरी, 2003) हिंदी के प्रसिद्ध कवि और लेखक थे। उनकी "मधुशाला" कविता संग्रह हिंदी साहित्य का एक महत्वपूर्ण काम है।'
  }
];

// Genres data
export const genres: Genre[] = [
  {
    id: '1',
    name: 'उपन्यास',
    description: 'गद्य साहित्य का एक रूप जिसमें एक कहानी कही जाती है।'
  },
  {
    id: '2',
    name: 'कविता',
    description: 'साहित्य का वह रूप जिसमें लेखक अपनी भावनाओं और विचारों को लयबद्ध शब्दों में व्यक्त करता है।'
  },
  {
    id: '3',
    name: 'कहानी',
    description: 'छोटा आख्यान जिसमें एक या कुछ पात्रों की कहानी होती है।'
  },
  {
    id: '4',
    name: 'नाटक',
    description: 'मंचन के लिए लिखी गई रचना जिसमें संवाद और अभिनय के माध्यम से कहानी प्रस्तुत की जाती है।'
  },
  {
    id: '5',
    name: 'आत्मकथा',
    description: 'लेखक द्वारा अपने जीवन का वर्णन।'
  }
];

// Books data
export const books: Book[] = [
  {
    id: '1',
    title: 'गोदान',
    author: authors[0], // प्रेमचंद
    coverImage: 'https://m.media-amazon.com/images/I/81HrQjtUBDL._SL1500_.jpg',
    genres: [genres[0]], // उपन्यास
    publishedYear: 1936,
    description: 'गोदान प्रेमचंद द्वारा लिखा गया एक प्रसिद्ध हिंदी उपन्यास है, जिसमें भारतीय किसानों के जीवन का यथार्थवादी चित्रण किया गया है। इसकी कहानी होरी और धनिया नामक एक गरीब किसान दंपति के इर्द-गिर्द घूमती है।',
    pageCount: 342,
    language: 'हिंदी',
    availability: 'available',
    featured: true,
    previewContent: 'होरी के जीवन का एक ही स्वप्न था, एक जोड़ी बैल। उसके पास एक गाय थी। वह कई दिनों से सोच रहा था कि गाय को बेचकर बैल का जोड़ा ले। खेती के लिए बैल जरूरी थे। गाय से केवल दूध ही मिलता था, और वह भी इतना नहीं कि घर का खर्च चल सके।'
  },
  {
    id: '2',
    title: 'नीरजा',
    author: authors[1], // महादेवी वर्मा
    coverImage: 'https://5.imimg.com/data5/ANDROID/Default/2021/9/AS/NL/RC/9767667/prod-20210930-2328434223265517217412871-jpg-1000x1000.jpg',
    genres: [genres[1], genres[2]], // कविता, कहानी
    publishedYear: 1934,
    description: '"नीरजा" महादेवी वर्मा द्वारा रचित एक काव्य संग्रह है। यह उनके प्रमुख रचनाओं में से एक है, जिसमें प्रकृति और आत्मा के गहरे संबंधों का सुंदर चित्रण किया गया है।',
    pageCount: 120,
    language: 'हिंदी',
    availability: 'available',
    featured: true
  },
  {
    id: '3',
    title: 'आषाढ़ का एक दिन',
    author: authors[2], // मोहन राकेश
    coverImage: 'https://m.media-amazon.com/images/I/A1mVEPF3YFL._SL1500_.jpg',
    genres: [genres[3]], // नाटक
    publishedYear: 1958,
    description: 'मोहन राकेश द्वारा लिखित यह नाटक महाकवि कालिदास के जीवन पर आधारित है। इसमें कवि के ग्रामीण जीवन से राजदरबार तक के सफर को दिखाया गया है।',
    pageCount: 145,
    language: 'हिंदी',
    availability: 'preview',
    featured: true,
    previewContent: 'कालिदास: (अपने आप से) आज आषाढ़ का पहला दिन है। बादल पहली बार पूरे आकाश में छा गए हैं। मैं इस पहाड़ी पर अकेला हूँ। चारों ओर सन्नाटा है। मानो यह प्रकृति मुझसे कुछ कहने के लिए बेचैन हो।'
  },
  {
    id: '4',
    title: 'तमस',
    author: authors[3], // भीष्म साहनी
    coverImage: 'https://m.media-amazon.com/images/I/81faMT-cnzL._SL1500_.jpg',
    genres: [genres[0]], // उपन्यास
    publishedYear: 1973,
    description: 'भीष्म साहनी का यह उपन्यास भारत-पाकिस्तान विभाजन के समय की सांप्रदायिक हिंसा पर केंद्रित है। इसमें विभाजन की त्रासदी और मानवीय संवेदनाओं का मार्मिक चित्रण किया गया है।',
    pageCount: 280,
    language: 'हिंदी',
    availability: 'available'
  },
  {
    id: '5',
    title: 'मधुशाला',
    author: authors[4], // हरिवंश राय बच्चन
    coverImage: 'https://m.media-amazon.com/images/I/71VVm4pMYvL._SL1360_.jpg',
    genres: [genres[1]], // कविता
    publishedYear: 1935,
    description: '"मधुशाला" हरिवंश राय बच्चन द्वारा रचित एक प्रसिद्ध काव्य संग्रह है। इसमें जीवन और मृत्यु पर गहन चिंतन प्रस्तुत किया गया है, मधु (शराब) को प्रतीक के रूप में प्रयोग करते हुए।',
    pageCount: 112,
    language: 'हिंदी',
    availability: 'preview',
    previewContent: 'मदिरालय जाने को घर से चलता है पीनेवाला,\nकिस पथ से जाऊँ? असमंजस में है वह भोलाभाला;\nअलग-अलग पथ बतलाते सब पर मैं यह बतलाता हूँ-\nराह पकड़ तू एक चला चल, पा जाएगा मधुशाला।'
  },
  {
    id: '6',
    title: 'कफन',
    author: authors[0], // प्रेमचंद
    coverImage: 'https://m.media-amazon.com/images/I/81MDiCjzUxL._SL1500_.jpg',
    genres: [genres[2]], // कहानी
    publishedYear: 1936,
    description: 'प्रेमचंद की यह प्रसिद्ध कहानी गरीबी और मानवीय संवेदनाओं का दर्दनाक चित्रण करती है। इसमें एक गरीब पिता और पुत्र की कहानी है, जिनकी पत्नी/माता की मृत्यु हो जाती है।',
    pageCount: 12,
    language: 'हिंदी',
    availability: 'available'
  },
  {
    id: '7',
    title: 'आधे अधूरे',
    author: authors[2], // मोहन राकेश
    coverImage: 'https://m.media-amazon.com/images/I/A1vC6xa1AcL._SL1500_.jpg',
    genres: [genres[3]], // नाटक
    publishedYear: 1969,
    description: 'इस नाटक में मोहन राकेश ने एक मध्यमवर्गीय परिवार के टूटते रिश्तों और आधुनिक जीवन की विसंगतियों को प्रस्तुत किया है।',
    pageCount: 168,
    language: 'हिंदी',
    availability: 'preview'
  },
  {
    id: '8',
    title: 'यामा',
    author: authors[1], // महादेवी वर्मा
    coverImage: 'https://m.media-amazon.com/images/I/51VRcCP9KYL.jpg',
    genres: [genres[1]], // कविता
    publishedYear: 1936,
    description: '"यामा" महादेवी वर्मा का एक प्रसिद्ध काव्य संग्रह है। इसमें उनकी विरह और वेदना से भरी कविताएँ संकलित हैं, जिनमें अद्वैतवादी दर्शन की झलक मिलती है।',
    pageCount: 98,
    language: 'हिंदी',
    availability: 'available'
  }
];
