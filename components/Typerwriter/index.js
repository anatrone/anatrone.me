import Typewriter from 'typewriter-effect';

export default function Typewriterx() {
    return (
      <>
        <Typewriter
            options={{
                strings: ['Gabriel Anatrone', 
                            'Anatrone',
                            'Ana',
                            'Gabs',
                            'ガブリエル'],
                autoStart: true,
                loop: true,
            }}
        />
      </>  
    )
}