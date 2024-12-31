import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/typography/button/button";
export default function Home() {
  return (
    <>
      <Seo title="Coders Monkey" description="description..." />
      <div className="flex items-center gap-4">
        <Button size="large">Accent</Button>
        <Button size="small" variant="secondary">
          Secondary
        </Button>
        <Button variant="outline">Outline</Button>
        <Button size="small" variant="disabled" disabled>
          Disabled
        </Button>
      </div>
      {/* 
    <Typography variant="h1" theme="primary" component="div">
      Welcome to Coders Monkey
    </Typography>
    <Typography variant="h2" theme="secondary" component="div">
      Welcome to Coders Monkey
    </Typography>
    <Typography variant="lead" component="div">
      Welcome to Coders Monkey
    </Typography>
    <Typography variant="caption1" component="div">
      Welcome to Coders Monkey
    </Typography>
    <Typography variant="caption4" component="div">
      Welcome to Coders Monkey
    </Typography>
    <Typography variant="caption4" weight='medium' component="div">
      Welcome to Coders Monkey
    </Typography> */}
    </>
  );
}
