"use client";

import React from "react";
import { NeoText } from "@/components/atoms/neo-text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormField } from "@/components/molecules/form-field";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

export default function ProfilPage() {
  const router = useRouter();
  const [seed, setSeed] = React.useState("Felix");

  const handleSave = () => {
    toast.success("Profil berhasil disimpan!");
  };

  const randomizeAvatar = () => {
    const seeds = ["Felix", "Luna", "Milo", "Bella", "Charlie", "Lucy", "Max", "Daisy"];
    setSeed(seeds[Math.floor(Math.random() * seeds.length)]);
  };

  return (
    <div className="flex flex-col p-4 gap-6 animate-in fade-in pb-28">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => router.back()}
          className="rounded-full shadow-[2px_2px_0_0_#000000]"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <NeoText variant="title">Profilku</NeoText>
        </div>
      </div>

      <Card className="border-4 shadow-[4px_4px_0_0_#000000]">
        <CardContent className="p-6 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
             <Avatar className="w-32 h-32 border-4 border-border shadow-[4px_4px_0_0_#000000]">
                <AvatarImage src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`} alt="Avatar" />
                <AvatarFallback>KID</AvatarFallback>
             </Avatar>
             <Button variant="outline" size="sm" onClick={randomizeAvatar} className="font-bold">
               <RefreshCw className="w-4 h-4 mr-2" /> Ganti Avatar
             </Button>
          </div>

          <div className="space-y-4">
            <FormField label="Nama Panggilan" defaultValue="Budi" />
            <FormField label="Umur (Tahun)" defaultValue="5" type="number" />
          </div>

          <Button variant="default" className="w-full font-bold mt-4" onClick={handleSave}>
            <Save className="w-5 h-5 mr-2" /> Simpan Profil
          </Button>

        </CardContent>
      </Card>
      
      <Button variant="outline" className="w-full text-destructive border-destructive font-bold hover:bg-destructive hover:text-white" onClick={() => router.push('/login')}>
        Keluar
      </Button>

    </div>
  );
}
