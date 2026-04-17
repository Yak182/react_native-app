import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Text className="text-xl font-bold text-success">
                Welcome to NativeWind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white">
                Onboarding
            </Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white">
                GO to Sign in
            </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white">
                Go to Sign up
            </Link>

            <Link href="/subscriptions/spotify">Spotify Subscription</Link>
            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: { id: "claude" },
                }}
            >
                Claude Max Subscription
            </Link>

        </View>
    );
}