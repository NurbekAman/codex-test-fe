import React, { useState, useCallback } from 'react';

import CanvasList from './CanvasList';
import CanvasForm from './CanvasForm';
import Loading from './Loading';
import Error from './Error';

function App() {
  const [canvasList, setCanvasList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (file) => {
    setError(null);
    setLoading(true);
    try {
      const result = await fetch(`http://localhost:6006/upload/file=${file.name}`, {
        method: 'POST',
        body: file,
        headers: {
          contentType: 'text/plain'
        }
      });

      const data = await result.json();

      if (result.status === 400) {
        throw data;
      }

      if (data && data.length) {
        setCanvasList(data);
      }
    } catch (e) {
      setCanvasList([]);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />
    }

    return canvasList.length > 0 && (
      <CanvasList canvasList={canvasList} />
    );
  }

  return (
    <div>
      <CanvasForm onSubmit={onSubmit} />
      {renderContent()}
    </div>
  );
}

export default App;
