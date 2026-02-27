import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SettingsModal from '../components/settings/SettingsModal';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { useTimer } from '../hooks/useTimer';
import { useTasks } from '../hooks/useTasks';
import { useSettings } from '../context/SettingsContext';

export default function HomePage() {
  const { settings } = useSettings();
  const timer = useTimer(settings);
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSettings={() => setSettingsOpen(true)} />
      <HeroSection
        timer={timer}
        sessionsGoal={settings.sessionsGoal}
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onOpenAddTask={() => setTaskModalOpen(true)}
      />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />

      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        onApplySettings={timer.applySettings}
      />
      <AddTaskModal
        isOpen={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
        onAdd={addTask}
      />
    </>
  );
}
