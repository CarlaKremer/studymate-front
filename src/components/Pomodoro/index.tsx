import { useState, useLayoutEffect } from 'react'
import { Container, Timer, ContainerButtons} from './styles'
import Image from "next/image";

export default function Pomodoro() {
  let countdownTimeout: NodeJS.Timeout

  const [timeLocalStorage, setTimeLocalStorage] = useState(0)
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [rest, setRest] = useState(false)
  const [numberSprint, setNumberSprint] = useState(1)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    if (rest) {
      setTime(5 * 60)
    } else {
      setTime(25 * 60)
    }
  }

  function finishCountdown() {
    if (!rest) {
      setTime(5 * 60)
      setRest(true)
    } else {
      setRest(false)
      setTime(25 * 60)
    }
    setIsActive(false)
  }

  useLayoutEffect(() => {
    if (rest) {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else if (isActive && time === 0) {
        setIsActive(false)
        setTime(25 * 60)
        setRest(false)
      }
    } else {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1)
          setTimeLocalStorage(timeLocalStorage + 1)
        }, 1000)
      } else if (isActive && time === 0) {
        setIsActive(false)
        setTime(5 * 60)
        setRest(true)
        setNumberSprint(numberSprint + 1)
      }
    }
  }, [isActive, time])

  return (
    <Container>
      <Timer>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
        <p>:</p>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </Timer>

      <ContainerButtons active={isActive}>
        {isActive ? (
          <button className="stop" onClick={stopCountdown}>
             <Image
              src={"./assets/icons/pause.svg"}
              width={16}
              height={16}
              alt="ícone de pausar"
            />
          </button>
        ) : (
          <button className="start" onClick={startCountdown}>
             <Image
              src={"./assets/icons/play.svg"}
              width={16}
              height={16}
              alt="ícone de continuar"
            />
          </button>
        )}
        <button className="reset" onClick={() => resetCountdown()}>
            <Image
              src={"./assets/icons/backward.svg"}
              width={16}
              height={16}
              alt="ícone de recomeçar"
            />
        </button>

        <button className="finish" onClick={() => finishCountdown()}>
            <Image
              src={"./assets/icons/stop.svg"}
              width={16}
              height={16}
              alt="ícone de parar"
            />
        </button>
      </ContainerButtons>
    </Container>
  )
}