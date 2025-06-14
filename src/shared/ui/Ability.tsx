import { AbilityBox, AbilityBoxTitle, AbilityBoxValue } from '@ui'

export const Ability = ({ label, value }: { label: string; value: number }) => (
  <AbilityBox>
    <AbilityBoxTitle label={label} />
    <AbilityBoxValue value={value} />
  </AbilityBox>
)
