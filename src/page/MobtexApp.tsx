import React, { useState ,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import api from '../service/api'

import ImageError from '../assets/image-not-found.png';
import { Container, Title } from './styles'

interface DataProps {
  id: number;
  name: string;
  img: string;
}

interface ApiResponse<T>{
  data: T
}

const MobtexApp: React.FC = () => {
  const [datas, setDatas] = useState<DataProps[]>([])

  const sortIds = <T extends { id: number }>(a: T, b: T) => a.id - b.id

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await api.get<ApiResponse<DataProps[]>>('/teste')
      const fetchedData = response?.data

      if (!fetchedData.length){
        setDatas([])

        return
      }

      const previousId = fetchedData.sort(sortIds).map(x => x.id)

      const newData = fetchedData.reduce((acc, curr) => {
         const hasDuplicatedId = acc.some(item => item.id === curr.id)

         if(hasDuplicatedId){
            const [higherId] = previousId;

            return [...acc, { ...curr, id: higherId + 1 }]
         }

         return [...acc, curr]

      }, [] as DataProps[]);

      setDatas(newData)
    }
     
    fetchData()

  }, []);

  return(
    <Container>
     {datas.map((item) => (
        <Stack direction="row" >
        <Avatar variant="square"  >
        <img
          key={item.id}
          alt={item.name}
          src={item.img}
          onError={(e: any) => {
            e.target.src = ImageError
          }}
        />
        </Avatar>
        <Title>{item.name}</Title>
      </Stack>
     ))}
    </Container>
  )
}

export default MobtexApp;
