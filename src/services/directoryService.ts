import { supabase } from '../lib/supabase';
import { companiesData } from '../data/companies';
import { productsData } from '../data/products';
import { studiesData } from '../data/studies';
import { datasetsData } from '../data/datasets';
import { academicData } from '../data/academic';
import { consortiaData } from '../data/consortia';
import { eventsData } from '../data/events';
import { Submission } from '../types/directory';

export const getCompanies = () => companiesData;
export const getProducts = () => productsData;
export const getStudies = () => studiesData;
export const getDatasets = () => datasetsData;
export const getAcademicCenters = () => academicData;
export const getConsortia = () => consortiaData;
export const getEvents = () => eventsData;

export const getCompanyBySlug = (slug: string) => companiesData.find(c => c.slug === slug);
export const getProductBySlug = (slug: string) => productsData.find(p => p.slug === slug);
export const getStudyBySlug = (slug: string) => studiesData.find(s => s.slug === slug);
export const getDatasetBySlug = (slug: string) => datasetsData.find(d => d.slug === slug);
export const getAcademicCenterBySlug = (slug: string) => academicData.find(a => a.slug === slug);
export const getConsortiumBySlug = (slug: string) => consortiaData.find(c => c.slug === slug);
export const getEventBySlug = (slug: string) => eventsData.find(e => e.slug === slug);

export const submitEntry = async (submission: Submission): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase.from('submissions').insert({
      submitter_name: submission.submitterName,
      submitter_email: submission.submitterEmail,
      submitter_organization: submission.submitterOrganization,
      submission_type: submission.submissionType,
      data: submission.data,
      status: 'pending',
    });
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch {
    return { success: false, error: 'Failed to submit. Please try again.' };
  }
};

export const getAdminStats = () => ({
  totalCompanies: companiesData.length,
  totalProducts: productsData.length,
  totalStudies: studiesData.length,
  totalDatasets: datasetsData.length,
  totalAcademicCenters: academicData.length,
  totalConsortia: consortiaData.length,
  totalEvents: eventsData.length,
});
