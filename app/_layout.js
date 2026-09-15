import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: 'Introdução'}}/>
            <Stack.Screen name="paisagem" options={{title: 'Resort'}}/>
        </Stack>
    )
}