import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <main>
      <Button>
        enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>
      
      <div>
        <Input type="text"></Input>
      </div>
    </main>
  );
}
