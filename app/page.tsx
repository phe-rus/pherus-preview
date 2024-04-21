import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <section className="flex flex-col gap-5 w-full h-full">
      <Tabs defaultValue="account" className="w-full h-full">
        <TabsList>
          <div className="flex flex-row gap-2">
            <TabsTrigger value="account">Overview</TabsTrigger>
            <TabsTrigger value="password">Domains</TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  )
}