import { AbilityBox, AbilityBoxTitle, AbilityBoxValue } from './AbilityBox'

export const Ability = ({ label, value }: { label: string; value: number }) => (
  <AbilityBox>
    <AbilityBoxTitle label={label} />
    <AbilityBoxValue value={value} />
  </AbilityBox>
)
