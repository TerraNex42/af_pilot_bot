import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useFormStore from "./store/formStore";



export function Alert() {
  const {isError, message} = useFormStore((state) => state.error)
  const toggleError = useFormStore((state) => state.toggleIsError)
    
  return (
    <AlertDialog open={isError}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Une erreur est survenu</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={toggleError}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
