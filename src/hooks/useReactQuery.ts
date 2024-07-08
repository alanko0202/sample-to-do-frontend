import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useApiFunctions } from "../services/axios";

export function useReactQuery() {
  const { updateDuty, createDuty, fetchDuties, deleteDuty } = useApiFunctions();
  const queryClient = useQueryClient();

  const useQueryFetchDuties = () => {
    return useQuery({
      queryKey: ["duties"],
      queryFn: fetchDuties,
    });
  };

  const useQueryCreateDuty = () => {
    return useMutation({
      mutationFn: createDuty,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["duties"] });
      },
    });
  };

  const useQueryDeleteDuty = () => {
    return useMutation({
      mutationFn: deleteDuty,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["duties"] });
      },
    });
  };

  const useQueryUpdateDuty = () => {
    return useMutation({
      // mutationFn: (id, name)=>updateDuty(id, name),
      mutationFn: ({ id, name }: { id: string; name: string }) =>
        updateDuty(id, name),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["duties"] });
      },
    });
  };

  return {
    useQueryFetchDuties,
    useQueryCreateDuty,
    useQueryDeleteDuty,
    useQueryUpdateDuty
  };
}
