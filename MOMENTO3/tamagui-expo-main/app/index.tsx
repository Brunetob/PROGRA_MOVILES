import { Backpack, Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";
// mios
import { Image } from "tamagui";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <YStack
        alignItems="center"
      >
        <Image 
          source={require('../assets/images/cinecam.png')}
          style={{
            marginTop: 100,
            width: 160,
            height: 160,
            
          }}
        />
      </YStack>
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
        >
          <H1 textAlign="center" color={"#fefefe"}>THE HUNGER GAMES</H1>
        </YStack>

        <YStack 
          space="$1"
          style={{
            alignItems: "center"
          }}
        >
          <Button 
            onPress={() => router.push("../app/dashboard")}
            width={100}
            height={50}
          >
            BEGIN
          </Button>
        </YStack>
        <YGroup separator={<Separator />}></YGroup>
      </MyStack>
    </MySafeAreaView>
  );
}