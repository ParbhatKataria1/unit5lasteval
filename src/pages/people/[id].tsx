import axios, {AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react'
import { PeopleSchema, TodosSchema } from '../utils/types';
import Link from 'next/link'
import { getTodosData } from '../utils/api';

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  

export interface PeopleItemSchema{
    todos:{

        data:TodosSchema[],
        id:string
    }
}

const PeopleItem = ({id}:{id:string}) => {
    const [todos, settodos] = useState<TodosSchema[]>([]);

    async function fetchData(){
        let data = await getTodosData(id);
        settodos(data);
    }
    useEffect(()=>{
        fetchData();
    },[])
console.log(todos);

  return (
    <div style={{textAlign:'center'}}>
        <Heading>UserId:{id}</Heading>
        <Heading>Todos Data</Heading>

        <Box p={4}>
        {/* { base: 1, md: 2, lg: 4 } */}
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={1} spacing={10}>
          {todos.map((el) => (
            <HStack mb={'4'} borderRadius='4' p={'5'} boxShadow={'rgba(255, 255, 255, 0.25) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.3) 0px 18px 36px -18px inset;'} key={el.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon color={el.completed?'green':'red'} as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{el.title}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    </div>
  )
}

export default PeopleItem;

export async function getStaticPaths(){
    let data :AxiosResponse<PeopleSchema[]> = await axios.get('https://jsonplaceholder.typicode.com/users');
    const newdata = data.data;
    return {
        paths:newdata.map((el)=>({
            params:{id:String(el.id)}
        })),
        fallback:false
    }
}

export async function getStaticProps(context:any){
    let id = context.params.id;
    let data = await getTodosData(id)
    return {
        props:{
            id
        }
    }

}