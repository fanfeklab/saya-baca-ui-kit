import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NeoText } from '@/components/atoms/neo-text';

export default function SwitchesDemoPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <NeoText variant="title">Switches & Checkboxes</NeoText>
      
      <section className="space-y-6">
        <NeoText variant="subtitle">Switches</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-xl">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Dark Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sound" defaultChecked />
            <Label htmlFor="sound">Sound Effects Enabled</Label>
          </div>
          <div className="flex items-center space-x-2">
             <Switch id="disabled-switch" disabled />
             <Label htmlFor="disabled-switch">Disabled Feature</Label>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Checkboxes</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-xl">
           <div className="flex items-center space-x-2">
             <Checkbox id="terms" />
             <Label htmlFor="terms" className="leading-snug">Accept terms and conditions</Label>
           </div>
           
           <div className="flex items-center space-x-2">
             <Checkbox id="newsletter" defaultChecked />
             <Label htmlFor="newsletter" className="leading-snug">Subscribe to updates</Label>
           </div>
        </div>
      </section>

      <section className="space-y-6">
        <NeoText variant="subtitle">Radio Group</NeoText>
        <div className="flex flex-col gap-6 p-8 border-4 border-dashed border-border rounded-xl bg-background/50 backdrop-blur-sm max-w-xl">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default View</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable View</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact View</Label>
            </div>
          </RadioGroup>
        </div>
      </section>
    </div>
  );
}
