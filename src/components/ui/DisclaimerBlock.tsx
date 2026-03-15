import { AlertCircle } from 'lucide-react';

interface DisclaimerBlockProps {
  text?: string;
}

export default function DisclaimerBlock({ text }: DisclaimerBlockProps) {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
      <AlertCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={18} />
      <p className="text-sm text-amber-800 leading-relaxed">
        {text || 'The information on this site is for educational purposes only and does not constitute medical advice. All claims should be independently verified. Consult a qualified healthcare professional for clinical decisions.'}
      </p>
    </div>
  );
}
