import { useState } from 'react'
import { QUIZ_QUESTIONS, getQuizResult } from '../../data/quizQuestions'

const QuizComponent = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const question = QUIZ_QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return

    setSelectedAnswer(answerIndex)
    setIsAnswered(true)

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1)
    }

    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
      } else {
        setShowResult(true)
        if (onQuizComplete) {
          onQuizComplete(score + (answerIndex === question.correctAnswer ? 1 : 0))
        }
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setIsAnswered(false)
  }

  if (showResult) {
    const finalScore = score
    const result = getQuizResult(finalScore)
    
    return (
      <div className="text-center">
        <div className={`inline-block ${result.bgColor} ${result.color} px-8 py-6 rounded-2xl mb-6`}>
          <h4 className="text-2xl font-title font-bold mb-2">{result.title}</h4>
          <p className="text-lg mb-4">Score: {finalScore}/{QUIZ_QUESTIONS.length}</p>
          <p className="text-sm">{result.message}</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
          >
            Recommencer le quiz
          </button>
          
          {finalScore >= 7 && (
            <div className="mt-6">
              <p className="text-sm text-maritime-slate mb-4">
                Partagez votre badge sur les réseaux sociaux !
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  📘 Partager sur Facebook
                </button>
                <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
                  🐦 Partager sur Twitter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-maritime-slate">Question {currentQuestion + 1}/{QUIZ_QUESTIONS.length}</span>
          <span className="text-maritime-slate">Score: {score}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-maritime-azure rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Question */}
      <div className="mb-8">
        <div className="text-6xl text-center mb-6">{question.symbol}</div>
        <h4 className="text-xl font-title font-semibold text-center mb-6 text-maritime-deep">
          {question.question}
        </h4>
        
        {/* Answers */}
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, idx) => {
            let buttonClass = 'p-4 rounded-xl border-2 transition-all text-left '
            
            if (isAnswered) {
              if (selectedAnswer === idx) {
                buttonClass += idx === question.correctAnswer
                  ? 'border-maritime-emerald bg-maritime-emerald/10 text-maritime-emerald'
                  : 'border-red-500 bg-red-50 text-red-700'
              } else if (idx === question.correctAnswer) {
                buttonClass += 'border-maritime-emerald bg-maritime-emerald/10 text-maritime-emerald'
              } else {
                buttonClass += 'border-gray-200 opacity-50'
              }
            } else {
              buttonClass += 'border-gray-300 hover:border-maritime-azure hover:bg-maritime-azure/5 cursor-pointer focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2'
            }
            
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={isAnswered}
                className={buttonClass}
                aria-label={`Option ${idx + 1}: ${option}`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Explanation (shown after answer) */}
      {isAnswered && (
        <div className="mt-6 p-4 bg-maritime-sky/10 rounded-xl">
          <p className="text-sm text-maritime-deep font-medium">
            <strong>Explication :</strong> {question.explanation}
          </p>
        </div>
      )}
    </div>
  )
}

export default QuizComponent
