import { Center, Space, Title } from '@ui'

export const HeroName = ({ name }: { name: string }) => (
  <Center>
    <Title>{name}</Title>
    <Space />
  </Center>
)
