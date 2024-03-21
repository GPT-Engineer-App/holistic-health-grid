import React from "react";
import { Box, Flex, Heading, Text, Image, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaYinYang, FaGlassWhiskey, FaBed } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Title Banner */}
      <Box bg="blue.500" py={4}>
        <Heading as="h1" size="xl" textAlign="center" color="white">
          The Foundations of Health
        </Heading>
      </Box>

      <Flex>
        {/* Nutrition Column */}
        <Box flex={1} p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Nutrition
          </Heading>
          <Image src="https://images.unsplash.com/photo-1514843319620-4f042827c481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYWxhbmNlZCUyMHBsYXRlJTIwb2YlMjBmb29kfGVufDB8fHx8MTcxMTA0NzQyNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Balanced Plate" mb={4} />
          <UnorderedList>
            <ListItem>Vitamins</ListItem>
            <ListItem>Minerals</ListItem>
            <ListItem>Fiber</ListItem>
          </UnorderedList>
        </Box>

        {/* Exercise Column */}
        <Box flex={1} p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Exercise
          </Heading>
          <Flex direction="column" align="center">
            <Icon as={FaRunning} w={8} h={8} mb={2} />
            <Text>Cardiovascular Health</Text>
          </Flex>
          <Flex direction="column" align="center" my={4}>
            <Icon as={FaDumbbell} w={8} h={8} mb={2} />
            <Text>Muscle Strength</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Icon as={FaYinYang} w={8} h={8} mb={2} />
            <Text>Flexibility</Text>
          </Flex>
        </Box>

        {/* Hydration Column */}
        <Box flex={1} p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Hydration
          </Heading>
          <Icon as={FaGlassWhiskey} w={16} h={16} mx="auto" mb={4} />
          <Text>Recommended Daily Water Intake:</Text>
          <Text fontWeight="bold">2 Liters / 68 oz</Text>
        </Box>

        {/* Sleep Column */}
        <Box flex={1} p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Sleep
          </Heading>
          <Image src="https://images.unsplash.com/photo-1698241025739-e1ab506b0f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBiZWRyb29tfGVufDB8fHx8MTcxMTA0NzQyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Bedroom" mb={4} />
          <Text>Recommended Sleep Duration for Adults:</Text>
          <Text fontWeight="bold">7-9 Hours</Text>
          <Text fontSize="sm" mt={2}>
            Tip: Reduce screen time before bed
          </Text>
        </Box>

        {/* Mental Wellness Column */}
        <Box flex={1} p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Mental Wellness
          </Heading>
          <Flex direction="column" align="center" mb={4}>
            <Icon as={FaYinYang} w={8} h={8} mb={2} />
            <Text>Meditation</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Image src="https://images.unsplash.com/photo-1586380951230-e6703d9f6833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nfGVufDB8fHx8MTcxMTA0NzQyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Journaling" w={8} h={8} mb={2} />
            <Text>Journaling</Text>
          </Flex>
          <Text fontSize="sm" mt={4}>
            Reduces stress & improves mental health
          </Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.100" py={4} fontSize="sm" textAlign="center">
        <Text>References to scientific studies available upon request.</Text>
      </Box>
    </Box>
  );
};

export default Index;
