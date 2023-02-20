import axios, {AxiosResponse} from 'axios';
import React from 'react'
import { PeopleSchema, Thisis, TodosSchema } from '../utils/types';
import Link from 'next/link'
import { GetStaticProps } from 'next';


import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    SimpleGrid
    
  } from '@chakra-ui/react';
import { getUsersData } from '../utils/api';
import Image from 'next/image';


const People = ({todos}:Thisis) => {
    const data = todos
    console.log(todos);

  return (
    <div>
        <SimpleGrid columns={[1, 2,3, 4]} spacing='40px'>

        {
            data?.map((el)=>{
                return  (
                <Center key={el.id} py={6}>
                <Box
                  maxW={'320px'}
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={6}
                  textAlign={'center'}>
                  <Image
                    // size={'xl'}
                    src={
                      'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    alt={'thsi is image'}
                    width={200}
                    height={200}
                    // mb={4}
                    // pos={'relative'}
                    // _after={{
                    //   content: '""',
                    //   w: 4,
                    //   h: 4,
                    //   bg: 'green.300',
                    //   border: '2px solid white',
                    //   rounded: 'full',
                    //   pos: 'absolute',
                    //   bottom: 0,
                    //   right: 3,
                    // }}
                  />
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Lindsey James
                  </Heading>
                  <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @lindsey_jam3s
                  </Text>
                  <Text
                    textAlign={'center'}
                    px={3}>
                    Actress, musician, songwriter and artist. PM for work inquires or{' '}
                    <Link href={'#'} color={'blue.400'}>
                      #tag
                    </Link>{' '}
                    me in your posts
                  </Text>
          
                  
          
                  <Stack justifyContent={'center'} mt={8} direction={'row'} spacing={4}>
                    <Link href={`/people/${el.id}`} >
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      _focus={{
                        bg: 'gray.200',
                      }}>
                      Got Todos
                    </Button>
                    </Link>
                  </Stack>
                </Box>
              </Center>
                )
            })
        }
        </SimpleGrid>
    </div>
  )
}

export default People;

export async function getStaticProps(){
    let data = await getUsersData();
    console.log(data)
    return {
        props:{
            todos:data
        }
    }

}