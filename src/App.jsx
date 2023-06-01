import './App.css';
import About from './components/about';
import Form from './components/form';

function App() {
  return (
    <div className='w-screen display items-center justify-center gap-1 h-screen flex-wrap '>
      <About />
      <Form />
    </div>
  );
}

export default App;
