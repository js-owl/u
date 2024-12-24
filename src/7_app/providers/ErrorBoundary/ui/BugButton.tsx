import { useEffect, useState } from "react";
import { Button } from "1_shared/ui/Button/Button";

export const BugButton = () => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return <Button onClick={onThrow}>throw error</Button>;
};
