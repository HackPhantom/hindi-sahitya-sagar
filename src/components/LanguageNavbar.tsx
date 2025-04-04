
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageNavbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-muted py-1 px-4 flex justify-end">
      <ToggleGroup type="single" value={language} onValueChange={(value) => value && setLanguage(value as 'hindi' | 'english')}>
        <ToggleGroupItem value="hindi" aria-label="Toggle Hindi" className="text-sm font-hindi">
          हिंदी
        </ToggleGroupItem>
        <ToggleGroupItem value="english" aria-label="Toggle English" className="text-sm">
          English
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageNavbar;
