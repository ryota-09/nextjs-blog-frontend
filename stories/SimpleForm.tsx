import { FC, useState } from 'react'

export type Props = {
  title: string
}

const SimpleFrom: FC<Props> = ({ title }) => {
  const [name, setName] = useState('')
  const [printName, setPrintName] = useState('')

  return (
    <>
      <h1>{title}</h1>
      <form
        onSubmit={(event) => {
          setPrintName(name)
          event.preventDefault()
        }}
      >
        <label>
          Name：
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div data-testid="print-name">入力した名前：{printName}</div>
    </>
  )
}

export default SimpleFrom
