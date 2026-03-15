import { useState } from 'react';
import SearchInput from '../components/ui/SearchInput';
import { glossaryTerms } from '../data/glossary';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Glossary() {
  const [search, setSearch] = useState('');

  const filtered = glossaryTerms.filter(term =>
    search === '' ||
    term.term.toLowerCase().includes(search.toLowerCase()) ||
    term.definition.toLowerCase().includes(search.toLowerCase())
  );

  const groupedLetters = alphabet.filter(letter =>
    filtered.some(t => t.category === letter)
  );

  const termsByLetter = (letter: string) =>
    filtered.filter(t => t.category === letter);

  return (
    <>
      <div className="bg-[#0c2340] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Glossary</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Oculomics terminology
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            A reference glossary for key terms in oculomics, retinal imaging, biomarker science, and clinical evidence methodology.
          </p>
          <div className="mt-8 max-w-md">
            <SearchInput value={search} onChange={setSearch} placeholder="Search terms..." />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {search === '' && (
          <div className="flex flex-wrap gap-2 mb-10">
            {groupedLetters.map(letter => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-[#0c2340] hover:text-white hover:border-[#0c2340] transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg font-medium mb-2">No terms found</p>
            <p className="text-sm">Try a different search term.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedLetters.map(letter => (
              <div key={letter} id={`letter-${letter}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 bg-[#0c2340] rounded-xl flex items-center justify-center">
                    <span className="text-teal-400 font-bold text-lg">{letter}</span>
                  </div>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>
                <div className="space-y-4">
                  {termsByLetter(letter).map(term => (
                    <div key={term.term} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-900">{term.term}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed mt-2">{term.definition}</p>
                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          <span className="text-xs text-slate-400 font-medium">Related:</span>
                          {term.relatedTerms.map(related => (
                            <span key={related} className="text-xs bg-slate-50 text-teal-600 border border-slate-200 px-2 py-0.5 rounded-full">
                              {related}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
