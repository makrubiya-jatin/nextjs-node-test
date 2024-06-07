import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import classNames from "classnames";
import { useContext, useState } from "react";
import PersonDetails from "@/components/Person";
import customFetch from "@/utils/common/customeFetch";
import { LogContext } from "@/contexts/LogContext";

const Home: NextPage = () => {

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  const fetchPersonDetails = async (person: string) => {
    if (abortController) {
      abortController.abort();
    }

    const controller = new AbortController();
    setAbortController(controller);
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await customFetch(`/person?person=${person}`, {
        signal: controller.signal
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const result = await response.json();
      setData(result);
    } catch (error:any) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError('Failed to load data');
      }
    } finally {
      setLoading(false);
      setAbortController(null);
    }
  };

  const handleButtonClick = (person: string) => {
    setSelectedPerson(person);
    fetchPersonDetails(person);
  };

  const { enableLogs , toggleLogs} = useContext(LogContext) ??  {};

  return (
  <MainLayout>
    <div className={`${classNames("flex gap-2")} home-container`}>
        {Object.values(Person).map((person) => (
          <Button 
          key={person}
          onClick={() => handleButtonClick(person)}
          className={classNames({
            'selected': person === selectedPerson,
          })}>{person}</Button>
        ))}
    </div>
    <PersonDetails loading={loading} error={error} data={data} />
  </MainLayout>
  );
};

export default Home;
