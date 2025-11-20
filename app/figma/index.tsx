import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function FigmaScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#00000000",
            borderRadius: 34,
            paddingVertical: 143,
            paddingHorizontal: 14,
          }}
        >
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 17,
                marginTop: 8,
                marginBottom: 10,
                marginLeft: 54,
              }}
            >
              A Short Title Is Best
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 17,
                marginBottom: 24,
                marginLeft: 54,
                width: 239,
              }}
            >
              A description should be a short, complete sentence.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#78788026",
              borderRadius: 26,
              marginBottom: 29,
            }}
          >
            <View
              style={{
                paddingHorizontal: 16,
              }}
            >
              <View
                style={{
                  height: 1,
                  marginBottom: 19,
                }}
              />
              <Text
                style={{
                  color: "#000000",
                  fontSize: 17,
                  marginBottom: 19,
                  marginLeft: 53,
                }}
              >
                Value
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 16,
              }}
            >
              <View
                style={{
                  height: 1,
                  marginBottom: 19,
                }}
              />
              <Text
                style={{
                  color: "#3C3C43",
                  fontSize: 17,
                  marginBottom: 19,
                  marginLeft: 53,
                }}
              >
                Value
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#0088FF",
                borderRadius: 100,
                paddingVertical: 13,
                marginBottom: 10,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 17,
                }}
              >
                Primary
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#78788026",
                borderRadius: 100,
                paddingVertical: 13,
                marginBottom: 10,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 17,
                }}
              >
                Destructive
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#78788026",
                borderRadius: 100,
                paddingVertical: 13,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 17,
                }}
              >
                Secondary
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
