import { Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useFinanceStore } from "../store/finance-store";

const Dashboard = () => {
  const { transactions, addTransaction } = useFinanceStore();

  return (
    <Box padding="4" maxW="1200px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Personal Finance Dashboard
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" bg="white" p={4} borderRadius="md" shadow="md">
          <Text>Total Income</Text>
          <Text fontSize="xl" fontWeight="bold">
            $
            {transactions
              .filter((t) => t.type === "income")
              .reduce((acc, t) => acc + t.amount, 0)}
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" p={4} borderRadius="md" shadow="md">
          <Text>Total Expenses</Text>
          <Text fontSize="xl" fontWeight="bold">
            $
            {transactions
              .filter((t) => t.type === "expense")
              .reduce((acc, t) => acc + t.amount, 0)}
          </Text>
        </GridItem>
        <GridItem w="100%" bg="white" p={4} borderRadius="md" shadow="md">
          <Text>Remaining Balance</Text>
          <Text fontSize="xl" fontWeight="bold">
            $
            {transactions.reduce(
              (acc, t) => acc + (t.type === "income" ? t.amount : -t.amount),
              0
            )}
          </Text>
        </GridItem>
      </Grid>
      <Button
        mt={4}
        colorScheme="blue"
        onClick={() =>
          addTransaction({
            id: 1,
            description: "Freelance",
            amount: 500,
            date: "2024-10-01",
            type: "income",
          })
        }
      >
        Add Income Sample
      </Button>
    </Box>
  );
};

export default Dashboard;
