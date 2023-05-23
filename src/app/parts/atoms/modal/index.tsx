import { modalFlagState } from "@/app/lib/atoms/modal";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";

export const TaskModal = () => {
  const [isModal, setIsModal] = useRecoilState(modalFlagState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /**モーダルを閉じる */
  const handleClickModal = () => {
    setIsModal(!isModal);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-300 opacity-50">
      <div className="p-6 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">タスク</h2>
          <button className="px-4 py-2 text-white bg-red-500 rounded">
            閉じる
          </button>
        </div>
        <p className="mb-4">登録するタスクを入力してください</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="my-input" className="mb-1 font-medium text-gray-700">
            タスク概要
          </label>
          <input
            {...register("taskTitle", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.taskTitle && <p>必須項目です</p>}
          <label htmlFor="my-input" className="mb-1 font-medium text-gray-700">
            タスク内容
          </label>
          <input
            {...register("taskContent", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.taskContent && <p>必須項目です</p>}

          <button className="px-4 py-2 text-white bg-gray-500 rounded">
            登録
          </button>
        </form>
      </div>
    </div>
  );
};
