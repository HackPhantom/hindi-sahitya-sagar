
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface ShlokaData {
  id: string;
  title: {
    hindi: string;
    english: string;
  };
  text: string;
  meaning: {
    hindi: string;
    english: string;
  };
}

const shlokas: ShlokaData[] = [
  {
    id: "divine-bond",
    title: {
      hindi: "दैवी बंधन का श्लोक",
      english: "Shloka on the Divine Bond (The Power of Destiny)"
    },
    text: "दवस्य पथ चरतः, नपाः सम्पणमिस्त यः। \nकन्त रामस्य साहस्य, स्वयवर पश्यत सदा॥",
    meaning: {
      hindi: "यह श्लोक स्वयंवर में नियति की दैवीय भूमिका को दर्शाता है। यद्यपि कई राजा सक्षम थे, भगवान राम का दैवीय भाग्य और शक्ति ने उन्हें सीता के लिए एक आदर्श जोड़ा बना दिया। पहेली पूछती है कि सीता का दिल जीतने के लिए कौन नियत था - उत्तर है भगवान राम।",
      english: "This shloka reflects the divine role of destiny in the swayamvar. While many kings were capable, it was Lord Rama's divine destiny and strength that made him the perfect match for Sita. The riddle asks who was destined to win Sita's heart—the answer is Lord Rama."
    }
  },
  {
    id: "nirvana-shatakam-1",
    title: {
      hindi: "निर्वाण शतकम् - प्रथम श्लोक",
      english: "Nirvana Shatakam - First Verse"
    },
    text: "न च प्राणसज्ञो न व पञ्चवायः। \nन वा सप्तधातः न वा पञ्चकोशः॥ \nन वाक्पाणपाद न चोपस्थपायः। \nचदानन्दरूपः शवोऽहम शवोऽहम॥",
    meaning: {
      hindi: "इस श्लोक में आदि शंकराचार्य द्वारा आत्म-साक्षात्कार और शारीरिक पहचान से विलगाव पर जोर दिया गया है। यह कहता है कि 'मैं न तो जीवन शक्ति (प्राण) हूं और न ही पांच महत्वपूर्ण वायु, न ही सात शारीरिक तत्व और न ही पांच कोश (आवरण)। मैं न वाणी, हाथ, पैर, और न ही प्रजनन या मल त्यागने वाले अंग हूं। मैं शुद्ध चेतना, आनंदमय और शाश्वत हूं - मैं शिव हूं, मैं शिव हूं।' यह बताता है कि हमारा वास्तविक सार भौतिक शरीर या मन नहीं, बल्कि सभी भौतिक पहलुओं से परे अनंत, आनंदमय चेतना है।",
      english: "This shloka from Nirvana Shatakam by Adi Shankaracharya emphasizes self-realization and detachment from bodily identity. It states that 'I am neither the life force (prana) nor the five vital airs, nor the seven bodily elements nor the five sheaths (koshas). I am not speech, hands, feet, nor the reproductive or excretory organs. I am pure consciousness, blissful and eternal—I am Shiva, I am Shiva.' It conveys that our true essence is not the physical body or mind but the infinite, blissful consciousness beyond all material aspects."
    }
  },
  {
    id: "nirvana-shatakam-2",
    title: {
      hindi: "निर्वाण शतकम् - द्वितीय श्लोक",
      english: "Nirvana Shatakam - Second Verse"
    },
    text: "न म द्वषरागौ न म लोभमोहौ। \nमदो नव म नव मात्सयभावः॥ \nन धम न चाथ न कामो न मोक्षः। \nचदानन्दरूपः शवोऽहम शवोऽहम॥",
    meaning: {
      hindi: "मुझमें न द्वेष है न राग, न लोभ है न मोह। मैं अहंकार और ईर्ष्या से मुक्त हूं। मैं धर्म, अर्थ, काम और मोक्ष से परे हूं। मैं शुद्ध चेतना, आनंदमय और शाश्वत हूं - मैं शिव हूं, मैं शिव हूं। यह दर्शाता है कि वास्तविक आत्मा सभी भावनाओं, भौतिक इच्छाओं और यहां तक कि आध्यात्मिक लक्ष्यों से परे है, जो शुद्ध, अनंत चेतना के रूप में मौजूद है।",
      english: "I have neither hatred nor attachment, neither greed nor delusion. I am free from pride and jealousy. I am beyond righteousness (dharma), wealth (artha), desire (kama), and liberation (moksha). I am pure consciousness, blissful and eternal—I am Shiva, I am Shiva. It signifies that the true self is beyond all emotions, material desires, and even spiritual goals, existing as pure, infinite consciousness."
    }
  },
  {
    id: "nirvana-shatakam-3",
    title: {
      hindi: "निर्वाण शतकम् - तृतीय श्लोक",
      english: "Nirvana Shatakam - Third Verse"
    },
    text: "न म मत्यशंका न म जातभदः। \nपता नव म नव माता न जन्म॥ \nन बन्धन मत्र गरुनव शष्यः। \nचदानन्दरूपः शवोऽहम शवोऽहम॥",
    meaning: {
      hindi: "मुझे मृत्यु का भय नहीं है, न ही मुझमें जाति या जन्म के भेद हैं। मेरा न कोई पिता है, न माता, और न ही मेरा कभी जन्म हुआ था। मेरे न कोई रिश्तेदार हैं, न मित्र, न गुरु और न ही शिष्य। मैं शुद्ध चेतना, आनंदमय और शाश्वत हूं - मैं शिव हूं, मैं शिव हूं। यह इस बात पर जोर देता है कि वास्तविक आत्मा सांसारिक बंधनों, सामाजिक पहचानों और यहां तक कि जन्म और मृत्यु के चक्र से भी परे है, जो अनंत आनंदमय जागरूकता के रूप में मौजूद है।",
      english: "I have no fear of death, nor do I have distinctions of caste or birth. I have neither father nor mother, nor was I ever born. I have no relatives, no friends, no teacher, and no disciple. I am pure consciousness, blissful and eternal—I am Shiva, I am Shiva. It emphasizes that the true self is beyond worldly ties, social identities, and even the cycle of birth and death, existing as infinite blissful awareness."
    }
  }
];

const ShlokaNavbar: React.FC = () => {
  const { language } = useLanguage();
  const [selectedShloka, setSelectedShloka] = useState<ShlokaData | null>(null);

  return (
    <div className="flex items-center justify-center mx-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 font-hindi">
            {language === 'hindi' ? 'श्लोक' : 'Shlokas'} 
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] max-h-[600px] overflow-auto p-0">
          <Tabs defaultValue={shlokas[0].id} className="w-full">
            <TabsList className="w-full grid grid-cols-4">
              {shlokas.map((shloka, index) => (
                <TabsTrigger key={shloka.id} value={shloka.id}>
                  {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {shlokas.map((shloka) => (
              <TabsContent key={shloka.id} value={shloka.id} className="p-4">
                <h3 className="text-lg font-bold mb-2 font-hindi">
                  {language === 'hindi' ? shloka.title.hindi : shloka.title.english}
                </h3>
                <div className="bg-secondary/30 p-3 rounded-md mb-2 font-hindi text-center">
                  {shloka.text.split('\n').map((line, i) => (
                    <div key={i} className="my-1">{line}</div>
                  ))}
                </div>
                <div className="text-sm mt-3">
                  <h4 className="font-semibold mb-1">{language === 'hindi' ? 'अर्थ:' : 'Meaning:'}</h4>
                  <p className="font-hindi">
                    {language === 'hindi' ? shloka.meaning.hindi : shloka.meaning.english}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ShlokaNavbar;
