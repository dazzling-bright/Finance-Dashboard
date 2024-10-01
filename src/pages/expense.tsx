import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useFinanceStore } from "../store/finance-store";

type FormData = {
  description: string;
  amount: number;
  date: string;
};

const Expense = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const addTransaction = useFinanceStore((state) => state.addTransaction);

  const onSubmit = (data: FormData) => {
    addTransaction({
      id: Date.now(),
      description: data.description,
      amount: parseFloat(data.amount.toString()),
      date: data.date,
      type: "expense",
    });
    reset();
  };

  return (
    <Box padding="4" maxW="600px" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Expense detail"
              {...register("description", {
                required: "Description is required",
              })}
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.amount}>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              placeholder="Enter amount"
              {...register("amount", {
                required: "Amount is required",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>
              {errors.amount && errors.amount.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.date}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              {...register("date", { required: "Date is required" })}
            />
            <FormErrorMessage>
              {errors.date && errors.date.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="red" w="full">
            Add Expense
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Expense;
