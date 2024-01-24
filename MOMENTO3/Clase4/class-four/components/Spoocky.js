import React, { useState } from "react";
import { Pressable, View } from "react-native";

export function SpookyCounter(){
    const [spookyCount, setSpookyCount] = useState(0)

    return(
        <View>
            <Text>Conteo espeluznante: {spookyCount} </Text>
            <Pressable onPress={() => setSpookyCount(spookyCount + 1)}>Aumentar miedo</Pressable>
        </View>
    )
};

