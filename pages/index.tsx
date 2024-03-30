import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

// Define the structure of your financial records
interface FinancialRecord {
  amount: string;
  description: string;
  category: string;
  date: string;
}

const Home = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [records, setRecords] = useState<FinancialRecord[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showBubble, setShowBubble] = useState(false);

  // Extract dates from records for highlighting on the calendar
  const recordDates = records.map(record => new Date(record.date));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newRecord: FinancialRecord = { amount, description, category, date };
    setRecords([...records, newRecord]);
    // Reset the form fields
    setAmount('');
    setDescription('');
    setCategory('');
    setDate('');
  };

  const handleDayClick = (value: Date, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedDate(value);
    setShowBubble(true);


    setTimeout(() => {
      setShowBubble(false);
    }, 3000); // Hide the bubble after 3 seconds
  };


  // Filter records by selected date
  const filteredRecords = selectedDate
    ? records.filter(record => new Date(record.date).toDateString() === selectedDate.toDateString())
    : [];

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold text-center my-4">Finance Tracker</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="amount" className="block">Amount:</label>
            <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block">Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block">Category:</label>
            <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block">Date:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
        
        {/* Records list */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Records:</h2>
          <ul>
            {records.map((record, index) => (
              <li key={index}>
                {record.date} - {record.description}: ${record.amount} ({record.category})
              </li>
            ))}
          </ul>
        </div>

        {/* Calendar component */}
        <div className="mt-8 calendar-container">
          <h2 className="text-lg font-semibold">Calendar View</h2>
          <Calendar 
            onChange={handleDayClick}
            value={selectedDate}
            tileClassName={({ date, view }) => {
              if (view === 'month' && recordDates.some(recordDate => 
                recordDate.getDate() === date.getDate() &&
                recordDate.getMonth() === date.getMonth() &&
                recordDate.getFullYear() === date.getFullYear()
              )) {
                return 'highlight'; // A class to highlight the tile
              }
            }}
          />
        </div>

        {/* Bubble for displaying records */}
        {showBubble && selectedDate && (
          <div className="bubble">
            {/* Records for the selected date */}
            {filteredRecords.length > 0 ? (
              filteredRecords.map((record, index) => (
                <div key={index}>
                  {record.description}: ${record.amount} ({record.category})
                </div>
              ))
            ) : (
              <div>No records for this date</div>
            )}
          </div>
        )}
      </main>
      <style jsx global>{`
        .calendar-container .react-calendar {
          width: 100%;
          max-width: 1000px;
          font-size: 1.3em;
        }

        .highlight {
          background-color: #b6e0fe;
        }

        .bubble {
          position: absolute;
          background-color: red;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default Home;
