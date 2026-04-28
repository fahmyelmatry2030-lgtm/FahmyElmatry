import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timeline depends on the complexity. A standard landing page takes 1-2 weeks, while a full-scale web application can take 4-8 weeks."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes! I provide 30 days of free support after launch to ensure everything is running smoothly, with options for ongoing maintenance."
  },
  {
    q: "Can you help with UI/UX design as well?",
    a: "Absolutely. I follow modern design principles and can provide high-fidelity mockups before moving into development."
  },
  {
    q: "Which payment methods do you accept?",
    a: "I accept bank transfers, PayPal, and cryptocurrency. Payments are typically split into milestones (Deposit, Mid-project, and Final)."
  },
];

const FAQItem = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%', padding: '1.5rem', background: '#111827',
          border: `1px solid ${isOpen ? '#6366f1' : 'rgba(255,255,255,0.06)'}`,
          borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: '#fff', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s'
        }}
      >
        <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>{q}</span>
        {isOpen ? <Minus size={20} color="#6366f1" /> : <Plus size={20} color="#6b7280" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '1.5rem', color: '#9ca3af', lineHeight: 1.8, fontSize: '0.95rem' }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>Help Center</div>
          <h2 className="section-title">Common <span>Questions</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about working together.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
